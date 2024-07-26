function Branch(){
    const Array=["AIML","IT","CSE","ECE","EEE","MEC"]
    const ArrayList=Array.map((branch,index) => <li key={index}>{branch}</li>)
    return (
        <div>
            <h1>List of branches</h1>
            <ul>
                {ArrayList}
            </ul>
        </div>
    );
}
export default Branch;