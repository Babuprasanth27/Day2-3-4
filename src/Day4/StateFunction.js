import { useState } from "react";

function StateFunction(){
const [carNmae,setCarName]=useState("Thar");
const changeCarName=()=>setCarName("BMW")
const[count,setCount]=useState(0);
const changeCount=()=>setCount(count+1);
const decrCount=()=>setCount(count-1);
return (
<div>
    <h1>My car name is {carNmae}</h1>
    <button onClick={()=>setCarName("BMW")}>Click</button>
    <h1>Count {count}</h1>
    <button onClick={changeCount}>increment</button>
    <button onClick={decrCount}>decrement</button>

</div>
)
}
export default StateFunction;