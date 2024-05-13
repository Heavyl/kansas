

function Counter({counter}){    

    if( counter > 0){
        return (
            <div id="counter-container">
                <span className="counter-text">{ counter > 0 ? `${counter}` : '' }</span>
            </div> 
        )
    }
    
}

export default Counter