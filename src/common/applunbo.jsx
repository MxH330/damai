import React,{Component} from 'react'
import './applunbo.scss'
import imgjson from '../JSON/lunbo.json'
let Swiper = window.Swiper
export default class lunbo extends Component{
    // constructor(){
    //     super();
    // }
    render(){
        let imgs = imgjson;
        return(
            <div className="swiper-container swiper_lunbo">
                <div className="swiper-wrapper">
                {
                    imgs.map((item,index)=>{
                        return(
                            <div className="swiper-slide" key={index}><img src={item.img} alt="" className="lunboImg"/></div>
                        )
                    })
                }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    componentDidMount(){
        let swiper = new Swiper('.swiper-container', {
            loop : true,
            autoplay:{
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable :true
            },
          });

      
    }
}