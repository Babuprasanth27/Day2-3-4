//Without props keyword we accessing the elements

function PropsFunctionExample({college,place}){
    return (
        <div>
            <h1>I am studying at {college} located at {place}</h1>
        </div>
    )
}
export default PropsFunctionExample;