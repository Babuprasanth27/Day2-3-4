// import React form 'react'
export default function List1(){
    const college=[{id:1,srudent:"sachin",age:26},
{id:2,srudent:"ajain",age:2},
{id:3,srudent:"akil",age:23}]
const result=college.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)

return (
    <div style={{backgroundColor:'yellowgreen'}}>
        <h1>List of Student</h1>
        {result}
    </div>
)
}