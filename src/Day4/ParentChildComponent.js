

export default function Parent(){
    return(
        <div>
        <h1>Parent Component</h1>
        <Child res={100}/>
        </div>
    )
}
function Child(props){
    return (
        <div>
            <h1>Child Component</h1>
            <h1>The valid is {props.res}</h1>
        </div>
    )
}