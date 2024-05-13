import { useState } from "react";

function DualSlider({
    setMaxLength, 
    setMinLength, 
    minLength, 
    maxLength, 
    setInputValue,
    inputValue
    }){

    let [lowerValue, setLowerValue] = useState(4);
    let [upperValue, setUpperValue] = useState(8);

    let numCharToDelete = 0

    //Handle changes when the LOWER part of the dual slider is mooved
    const handleChangeLower = (e) =>{
        setMinLength(minLength = e.target.value)
        setLowerValue( lowerValue = minLength) 
        
    
    }
    //Handle changes when the UPPER part of the dual slider is mooved
    const handleChangeUpper = (e) =>{
        setMaxLength(maxLength = e.target.value)
        setUpperValue(upperValue = maxLength) 

        //Delete characters if upper slider part falls below the actual number of character in the input
        numCharToDelete = maxLength - inputValue.length
        if(numCharToDelete < 0){
            let newInputValue = inputValue.slice(0, (numCharToDelete));
            setInputValue(inputValue = newInputValue)
        }
        
    
    }
    return (
        <>
            <label >Number of letters</label>
            <span className="multi-range">
                <input onChange={handleChangeLower} type="range" min="4" value ={lowerValue} max="7"  id="lower"/>
                <input onChange={handleChangeUpper} type="range" min="7" value ={upperValue} max="10"  id="upper"/>
            </span>
        </>
    )
}

export default DualSlider