import React, { Component } from 'react'

import './home.scss'

export default class home extends Component{
    render(){
        let Header = (
                <div className="home-header">
                    <div>
                        <i className="iconfont icon-dizhi"></i>
                        <span className="city">深圳</span>
                    </div>
                    <div className="search-box">
                        <i className="iconfont icon-sousuo"></i>
                        <span>搜索明星/演出比赛/场馆</span>
                    </div>
                    <div>
                        <span className="iconfont icon-gerenzhongxin"></span>
                    </div>
                </div>
        )
        
        return(
            <div className="home">
                {/* 头部 */}
                {Header}
                {/* banner图 */}
                <div className="banner"></div>
                {/* 导航 */}
                <div className="nav">
                    <li></li>
                </div>
            </div>
        )
    }
}