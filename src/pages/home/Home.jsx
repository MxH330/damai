import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink as Link, Redirect } from 'react-router-dom'
// import PropTypes from 'prop-types';
import './home.scss'
// import API from '../../api'

import starData from '../../JSON/starJson.json'

export default class home extends Component{
        state = {
            navList:[
                {name:'演唱会',icon:'iconfont icon-yanchanghuis',path:'/category'},
                {name:'话剧歌剧',icon:'iconfont icon-huajugeju',path:'/category'},
                {name:'音乐',icon:'iconfont icon-yinlehui',path:'/category'},
                {name:'体育',icon:'iconfont icon-tiyu',path:'/sport'},
                {name:'曲苑杂坛',icon:'iconfont icon-shanzi-',path:'/category'},
                {name:'亲子',icon:'iconfont icon-qinzi',path:'/category'},
                {name:'展览休闲',icon:'iconfont icon-xiuxianshipin',path:'/category'},
                {name:'境外',icon:'iconfont icon-jingwaikehu',path:'/damaiglobal'}
            ],
            starList: starData
        }
    render(){
        let {navList, starList} = this.state;
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
                                <Link className="navItem" key={index} to={item.path} onClick={this.selectItem.bind(this, item.name)}>
                                    <span className={item.icon}></span>
                                    {item.name}
                                </Link>
                            )
                        })
                    }
                </div>
        // let show = 
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
                    <div className="star_bottom">
                        {
                            starList.map((item, index)=>{
                                return (
                                    <li className="starItem" key={index}>
                                        <div className="item">
                                            <div className="IMG">
                                                <img src={item.artPic} alt="" />
                                            </div>
                                            <div className="starInfo">
                                                <p className="starName">{item.artistName}</p>
                                                <p className="fans">{(item.artFans/10000).toFixed(2)}万粉丝</p>
                                            </div>
                                            <div>
                                                <span className="watch">＋关注</span>
                                            </div>
                                        </div>
                                        <div className="playNum">
                                            <span>最近{item.performanceTotal}场演出</span>
                                            <span className="iconfont icon-icon1 right"></span>
                                        </div>
                                    </li>
                                )
                            })
                            
                        }
                    </div>
                        
                </div>
                {/* 近期演出 */}
                <div className="show">
                    <div className="show_top">
                        <h3>近期演出</h3>
                        <span className="more">查看更多<i className="iconfont icon-icon1"></i></span>
                        <div className="dateNav">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    selectItem(value){
        console.log('点击了');
        console.log(value);
        // this.context.router.history.push('/sport');
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