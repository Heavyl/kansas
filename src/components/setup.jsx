import { useRef } from "react";
import { useState } from "react";
import StartButton from "./startButton";
import DualSlider from "./dualRangeSlider";

// eslint-disable-next-line no-unused-vars
function Setup({chooseWord, startGame, setStartGame}){
    let [showForm, setShowForm] = useState(true);
    let [minLength, setMinLength] = useState(4);
    let [maxLength, setMaxLength] = useState(8);
    let [inputValue, setInputValue] = useState('');
    
    //Use ref of input value to use it in the parent component
    const inputRef = useRef();

    //The function that handle the form submission and send input value to parent
    const handleSubmit = (e) =>{
        setStartGame(startGame = true);

        e.preventDefault();        
        chooseWord(inputRef.current.value);
        setShowForm(showForm = false) ;
        
    }

    const handleValueChange = (e) =>{
        let value = e.target.value ;  

        setInputValue(inputValue = value);     
        if(value.length  >= maxLength && maxLength <10){
            setMaxLength( maxLength = value.length +1 );
        }

    }

    if(showForm){
        return (
            <form onSubmit={handleSubmit}>
                
                <DualSlider 
                    maxLength = {maxLength}
                    setMaxLength = {setMaxLength}
                    minLength = {minLength}
                    setMinLength = {setMinLength}                    
                    setInputValue= {setInputValue}
                    inputValue = {inputValue}
                    >
                </DualSlider>

                <label className="form-label">Enter a word from {minLength} to {maxLength} letters</label>
                <div id="word-prompt">                
                    <input 
                        onChange={handleValueChange}
                        type="text" 
                        id="word" 
                        name="word" 
                        required 
                        minLength={minLength} 
                        maxLength={maxLength} 
                        placeholder={''}
                        className="word-input"
                        value={inputValue}
                        ref={inputRef}>                    
                    </input>
                    <StartButton ></StartButton>
                </div>
            </form>
        )
    }
    
    
}
export default Setup;