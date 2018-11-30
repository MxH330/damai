import React, { Component } from 'react'
// 引入轮播公共组件
import Bannerlubo from '../../common/applunbo'
import './Sport.scss'
export default class sport extends Component {

    render() {
        return (
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
                        <span className="hot-link"><img src="//gw.alicdn.com/tfs/TB1bFwVEKGSBuNjSspbXXciipXa-343-148.jpg_Q50s150.jpg" /></span>
                        <span className="hot-link"><img src="https://gw.alicdn.com/tfs/TB10Jg2sxTpK1RjSZR0XXbEwXXa-343-148.png" /></span>
                        <span className="hot-link"><img src="https://gw.alicdn.com/tfs/TB10Jg2sxTpK1RjSZR0XXbEwXXa-343-148.png" /></span>
                    </div>
                </div>
                {/*篮球*/}


            </div>
        )
    }

    back = (...rest)=>{
        this.props.history.goBack();
    }
}