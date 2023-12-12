import { useState } from "react";

export default function StateHoldObject(){
    const[college,setCollege]=useState({cid:1,cname:"skct",year:2023})
    const changeDemo=()=>{
        setCollege((prevState)=>{return{...prevState,year:2024}})
    }
    const changeNmae=()=>{
        setCollege((eprevState)=>{return{...eprevState,cname:"Akil"}})
    }
    return(
        <div>
        <h1>college ID is {college.cid}</h1>
        <h1>college name is {college.cname}</h1>
        <h1>Year {college.year}</h1>
        <button onClick={changeDemo}>change Year</button>
        <button onClick={changeNmae}>change name</button>

        </div>
    )
}
