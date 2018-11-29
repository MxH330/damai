import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'


// 页面
import Home from './pages/home/Home'
import Sport from './pages/sport/sport'



export default class App extends Component{
    render(){
        return(
            <div className="app">
                <BrowserRouter>
                    
                    <Route path="/" component={Home}/>
                    <Route path="/sport" component={Sport}/>


                </BrowserRouter>
            </div>
        )
        
    }
}