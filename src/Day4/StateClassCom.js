import React,{ Component } from "react";

class StateClassCom extends Component
{
    state={
        color:"red",
        price:121
    }

    handleChange=()=>{this.setState({color:"Yellow"})}
    render(){
        return(
            <div>
            <h1>The color i have selected is {this.state.color} and the price is {this.state.price}</h1>
            <button onClick={this.handleChange}>Click ME</button>
            </div>
        )
    }
}
export default StateClassCom;