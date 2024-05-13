

function Screen( {wordToGuess, shuffleWord} ){

    if( wordToGuess != ''){
        return (  
            <div className="screen">
                <p className="word-to-guess">{shuffleWord}</p>
            </div>      
        )
    }
}
    


export default Screen;