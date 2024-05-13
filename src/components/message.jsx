
function Message({wordToGuess,shuffleWord, counter }){

    if(wordToGuess != ''){
        return (
            <>
                <span className="message">{shuffleWord === wordToGuess ? `It took ${counter} try` : `Searching for the word: ${wordToGuess}`}</span>
                
            </>             
        )
    }
    
    
}

export default Message