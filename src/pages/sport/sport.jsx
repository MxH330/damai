import React, { Component } from 'react'
import API from '../../api'
import 'whatwg-fetch'

// 引入轮播公共组件
import Bannerlubo from '../../common/applunbo'
import Shuiping from '../../common/shuipingIScroll'
import './sport.scss'
let IScroll = window.IScroll;
export default class sport extends Component {
    constructor() {
        super();
        this.state = {
            basketballObj: []
        }
    }


    render() {
        let { basketballObj } = this.state;
        console.log(basketballObj)
        let backetball =
            basketballObj.map((item, index) => {
                return (
                    <div className="match_item" key={item.id}>
                        <img src={item.verticalPic} alt="" />
                        <span className="match_city">{item.cityName}</span>
                        <div className="match_detail">
                            <span className="match_head">{item.name}</span>
                            <span className="match_time">{item.showTime}</span>
                        </div>
                    </div>
                )
            })
        return (
            <div className="swiper-sportBox">
                <div className="sportBox">
                    {/*头部搜索*/}
                    <div className="sportSearch">
                        <span className="iconfont icon-xiangzuo" onClick={this.back.bind(this)}></span>
                        <span className="iconfont icon-sousuo" id="search-icon"></span>
                        <input type="text" placeholder="搜索运动员、赛事、赛季、俱乐部" className="sportInp" />
                    </div>
                    {/*轮播图*/}
                    <Bannerlubo />
                    {/*活动专区*/}
                    <div className="wrap-active">
                        <div className="title">活动专区</div>
                        <div className="top-list">
                            <span className="damai-link"><img src="//gw.alicdn.com/tfs/TB1bFwVEKGSBuNjSspbXXciipXa-343-148.jpg_Q50s150.jpg" /></span>
                            <span className="damai-link"><img src="https://gw.alicdn.com/tfs/TB10Jg2sxTpK1RjSZR0XXbEwXXa-343-148.png" /></span>
                        </div>
                    </div>

                    {/*热门专区*/}
                    <div className="wrap-hot">
                        <div className="title">热门专区</div>
                        <div className="hot-list">
                            <span className="hot-link"><img src="//gw.alicdn.com/tfs/TB1jN3vqQvoK1RjSZFDXXXY3pXa-226-226.jpg_Q50s150.jpg" /></span>
                            <span className="hot-link"><img src="//gw.alicdn.com/tfs/TB1mt3wobvpK1RjSZPiXXbmwXXa-226-226.jpg_Q50s150.jpg" /></span>
                            <span className="hot-link"><img src="//gw.alicdn.com/tfs/TB1EC_1j4naK1RjSZFtXXbC2VXa-226-226.jpg_Q50s150.jpg" /></span>
                        </div>
                    </div>
                    {/*篮球*/}

                    <div className="basketball">
                        <div className="title"><span>篮球</span><span className="moreRight">更多></span></div>
                        <div className="basketball-match">
                                <Shuiping getballInfo={backetball}>

                                </Shuiping>
                        </div>

                    </div>

                    <div className="wrap-hot">
                        <div className="title">热门专区</div>
                        <div className="hot-list">
                            <span className="hot-link"><img src="//gw.alicdn.com/tfs/TB1jN3vqQvoK1RjSZFDXXXY3pXa-226-226.jpg_Q50s150.jpg" /></span>
                            <span className="hot-link"><img src="//gw.alicdn.com/tfs/TB1mt3wobvpK1RjSZPiXXbmwXXa-226-226.jpg_Q50s150.jpg" /></span>
                            <span className="hot-link"><img src="//gw.alicdn.com/tfs/TB1EC_1j4naK1RjSZFtXXbC2VXa-226-226.jpg_Q50s150.jpg" /></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    back = (...rest)=>{
        this.props.history.goBack();
    }
    getbacketball() {
        return {

        }
    }
    componentDidMount() {
        let iscroll = new IScroll('.swiper-sportBox', {
            bounce: false
        })
        iscroll.on('beforeScrollStart', () => {
            iscroll.refresh();
        })
        // 请求不到，自己写json数据
        // fetch(API.SOPRT_API,{
        //     method:'GET',
        //     headers:{
        //         "Accept":"application/json",
        //         "Content-type": "application/x-www-form-urlencoded"
        //     }
        // })
        // .then(function(response) {
        //     return response.json()
        // }).then(function(json) {
        //     console.log('parsed json', json)
        // }).catch(function(ex) {
        //     console.log('parsing failed', ex)
        // })


        fetch('../backetball.json')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                this.setState({ basketballObj: json });
            })
            .catch((ex) => {
                console.log(ex)
            })


    }







}