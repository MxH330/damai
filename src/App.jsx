import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.scss'


// 页面
import Home from './pages/home/Home'
import Sport from './pages/sport/sport'



export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="app">
                        <Route exact path="/" component={Home}/>
                        <Route path="/sport" component={Sport}/>
                </div>
            </BrowserRouter>
        )
        
    }
}