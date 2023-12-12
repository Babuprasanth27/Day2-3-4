import React from 'react'
import './App.css'
import Parent1 from './Day4/DynamicRenderingEx1'
import DefaultProps from './Day4/DefaultProps'
import TwoWayBinding from './Day4/TwoWayBinding'
import DynamicRendering from './Day4/DynamicRendering'
import Parent from './Day4/ParentChildComponent'
import StateHoldObject from './Day4/StateHoldObject'
import logo from './download.png'
import StateFunction from './Day4/StateFunction'
import StateClassCom from './Day4/StateClassCom'
import ArrowProps from './Day4/ArrowProps'
import PropsFunctionExample from './Day4/PropsFuctionExample'
import PropsClass from './Day4/PropsClass'
import PropsFunction from './Day4/PropsFunction'
export default function App() {
  return (
    <div>
    <PropsFunction name="hello" college="skct"> </PropsFunction>
    <PropsClass college="skct"></PropsClass>

    <PropsFunctionExample college={"skct"} place={"coimbatore"}></PropsFunctionExample>
    <ArrowProps place="India"></ArrowProps>
    <StateClassCom></StateClassCom>
    <StateFunction></StateFunction>
    <StateHoldObject></StateHoldObject>
    <Parent></Parent>
    <DynamicRendering></DynamicRendering>
    <TwoWayBinding/>
    <DefaultProps/>
    <Parent1/>

    </div>
    
    )
  }





  //   <div id="container">
    
  //     <div id="form">
  //     <h1 style={{color:"rgb(198, 122, 122)"}}>LOGINPAGE</h1>
  //         <form>
  //         <label>UserName:</label>
  //         <input type="text" placeholder="Username"></input>

  //         <label>Class:</label>
  //         <input type="text" placeholder="Class"></input>

  //         <label>RegisterNumber:</label>
  //         <input type="number" placeholder="RegisterNumber"></input>

  //         <label>DateOfBirth:</label>
  //         <input type="date"></input>

  //         <label>Address:</label>
  //         <input type="textarea" placeholder="Address"></input>

  //         <label>Email:</label>
  //         <input type="email" placeholder="Email"></input>

  //         <label>Password:</label>
  //         <input type="password" placeholder="Password"></input>

  //         <label>MobileNumber:</label>
  //         <input type="number" placeholder="MobileNumber"></input>
  //         <label>OTP:</label>
  //         <input type="password" placeholder="OTP"></input>

  //         <label>
  //         <input type="checkbox" name="terms" required></input>
  //         I agree to the terms and conditions
  //     </label>  
  //     <button type="button">Login</button>
    
  //     <button type="reset">Reset</button>
  //         </form>
  //     </div>
  //  </div>
