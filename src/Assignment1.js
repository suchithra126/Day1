function Assignment1(){
    const Array=["Reviewer Name","Product is good"];
    const ArrayList=Array.map((ReviewerName,index) => <li key={index}>{ReviewerName}</li>)
    const Array2=["Reviewer Name","Product is good"];
    const Array2List=Array2.map((ReviewerName,index) => <li key={index}>{ReviewerName}</li>)
    return (
        <div>
            <h3>Reviews</h3>
        <div>
            <img src='\OIP.jpeg'height='100px'width='150px'></img>
            <ul>
                {ArrayList}
            </ul>
        </div>
        <div>
        <img src='\OIP (1).jpeg'height='100px'width='150px'></img>
            <ul>
            {Array2List}
            </ul>
    </div>
    </div>
    );
}
export default Assignment1;