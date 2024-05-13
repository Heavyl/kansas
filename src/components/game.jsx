import { useState } from "react"
import Screen from "./screen";
import Setup from "./setup";
import Message from "./message";
import Counter from "./counter"
import Endscreen from "./endscreen";
import Title from "./title";
import SpeedProcess from "./speedProcess";


function Game(){

    let [tryList, setTryList] = useState('')

    let [wordToGuess, setWord] = useState('') ;
    let [shuffleWord, setshuffleWord] = useState('');
    let [counter, setCounter] = useState(0);

    const minInterval = 10;
    let [interval, setInterval] = useState(1000)
    let [startGame, setStartGame] = useState(false);

    let [endGame, setEndGame] = useState(false);
    
    const chooseWord = (wordInput) =>{
        setWord(wordInput) ;
        setshuffleWord(shuffleWord = wordInput);
    }
    const endOfGame = shuffleWord == wordToGuess && counter > 0 ? true : false
    
    if(startGame && !endGame){
        setTimeout(
            () => {
                
                if(endOfGame){
                    setEndGame(endGame = true) ;
                    setStartGame(startGame = false);
                    
                } else{
                    setshuffleWord(shuffleWord = shuffle(wordToGuess));      
                    setCounter(counter + 1);   
                    setTryList(tryList +  shuffleWord + ',');
                }
                
            },
            interval
        )  
    }
    
    
    
    return (  
        <div className="container">  
            <Title content='Kansas City Shuffle' type='h1'></Title>
            <Setup 
                chooseWord = {chooseWord} 
                startGame= {startGame}
                setStartGame= {setStartGame}
                >
            </Setup>            
            <Screen 
                wordToGuess = {wordToGuess} 
                shuffleWord = {shuffleWord} 
            >
            </Screen>

            <Message 
                wordToGuess = {wordToGuess} 
                shuffleWord = {shuffleWord} 
                counter = {counter}>
            </Message>

            <Counter counter={counter}></Counter>

            <Endscreen 
                tryList = {tryList}                 
                endGame={endGame}>  
            </Endscreen>

            <SpeedProcess 
                setInterval={setInterval} 
                interval = {interval} 
                startGame = {startGame}
                minInterval = {minInterval}>     
            </SpeedProcess>
            
        </div>      
    )
}
export default Game

//Convert string to array, shuffle it and return the join element in string form
function shuffle(string) {
    const array = string.split('')
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array.join('')
  }

