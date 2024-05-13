function SpeedProcess({setInterval, interval, startGame, minInterval}){

    let dNone = startGame ? '':'d-none' 
    
    const handleClick = () =>{
        interval > minInterval ? setInterval( interval / 2) : setInterval( interval = minInterval);
        
    }
    if(startGame){
        return <button onClick={handleClick} className={`speed-process ${dNone}`}>Speed x2</button>
    }
    
}

export default SpeedProcess