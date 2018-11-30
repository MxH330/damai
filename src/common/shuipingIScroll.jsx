import React,{Component} from 'react'
import './shuipingIScroll.scss'

let IScroll = window.IScroll;
export default class shuiping extends Component{
    constructor(props){
        super();
        this.state={
            width:0
        }
    }
    render(props) {
        let {width} = this.state
        return (
        <div className="ballsBox">
            <div className="swap-balls" ref="balls" style={{width:width + 'px'}}>
                {this.props.getballInfo}
            </div>
        </div>
        );
    }
    componentDidMount(){
        let ballsIscroll = new IScroll('.ballsBox', {
            scrollX:true,
            scrollY:false,
            bounce:false
        })
        ballsIscroll.on('beforeScrollStart',()=>{
            let width = 0;
            let arr = this.refs.balls.children
            for(let i=0; i<arr.length;i++){
                width += arr[i].clientWidth + 10;
            }
            this.setState({width:width});
            setTimeout(()=>{
                ballsIscroll.refresh();
            },0)
        })
        
    }




}