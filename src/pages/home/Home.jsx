import React, { Component } from 'react'

import './home.scss'
import API from '../../api'

import starData from './starJson.json'

export default class home extends Component{
        state = {
            navList:[
                {name:'演唱会',icon:'iconfont icon-yanchanghuis'},
                {name:'话剧歌剧',icon:'iconfont icon-huajugeju'},
                {name:'音乐',icon:'iconfont icon-yinlehui'},
                {name:'体育',icon:'iconfont icon-tiyu'},
                {name:'曲苑杂坛',icon:'iconfont icon-shanzi-'},
                {name:'亲子',icon:'iconfont icon-qinzi'},
                {name:'展览休闲',icon:'iconfont icon-xiuxianshipin'},
                {name:'境外',icon:'iconfont icon-jingwaikehu'}
            ],
            starList: starData
        }
    render(){
        let {navList} = this.state;
        let Header = <div className="home-header">
                        <div>
                            <i className="iconfont icon-dizhi"></i>
                            <span className="city">深圳</span>
                        </div>
                        <div className="search-box">
                            <i className="iconfont icon-sousuo"></i>
                            <span>搜索明星/演出比赛/场馆</span>
                        </div>
                        <div className="personCenter">
                            <span className="iconfont icon-gerenzhongxin"></span>
                        </div>
                    </div>

        let Nav = <div className="nav">
                    {
                        navList.map((item, index)=>{
                            return (
                                <li className="navItem" key={index}>
                                    <span className={item.icon}></span>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </div>
        return(
            <div className="home">
                {/* 头部 */}
                {Header}
                {/* banner图 */}
                <div className="banner"></div>
                {/* 导航 */}
                {Nav}
                {/* 广告 */}
                <div className="ad">
                    <img src="https://img.alicdn.com/tfs/TB1TQKnqNnaK1RjSZFBXXcW7VXa-750-240.gif" alt=""/>
                </div>
                {/* 大咖在大麦 */}
                <div className="starList">
                    <div className="star_top">
                        <h3>大咖在大麦</h3>
                        <span className="more">查看更多<i className="iconfont icon-icon1"></i></span>
                    </div>
                        {
                            starList.map((item, index)=>{
                                return (
                                    <div className="starItem">
                                        
                                    </div>
                                )
                            })
                            
                        }
                </div>
            </div>
        )
    }

    // componentDidMount(){
    //     fetch(API.STAR_API)
    //     .then((response)=>{
    //         console.log(response);
    //         return response.json();
    //     })
    //     .then((json)=>{
    //         console.log(API.STAR_API);
    //         console.log(json);
    //         this.setState({starList: json.data});
    //         console.log(this.state.starList);
    //     })
    //     .catch((ex)=>{
    //         console.log(ex);
    //     })
    // }
}