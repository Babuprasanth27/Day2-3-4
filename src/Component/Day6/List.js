import React from 'react'
function DisplayName(props)
{
    return (
        <div>
        <h1>{props.name}</h1>
        </div>
    )
}

export default function List(){
    const studentName=["Panvith" , "sumanth" , "Ashwin" , "Ajay"]
    const stName=studentName.map((stu)=><DisplayName name={stu}></DisplayName>)
    return (
        <div>
        {stName}
        </div>
    )
 }


// function DisplayName(props){
//     return (
//         <div>
//         <h1>List</h1>
//         </div>
//     )
// }