export default function Parent1(){
    const age=18;
    return(
        <div>
        <h1>Parent Component</h1>
        <Child1 age={100}/>
        </div>
    );
}
function Child1(props){
    let message;
    if(props.age>=18){
        message='Valid age :${props.age}';
    }
    else{
        message='Invalid Age :${props.age}';
    }
    return (
        <div>
            <h1>Child Component</h1>
            <h1>{message}</h1>
        </div>
    )
}