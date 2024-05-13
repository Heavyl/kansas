import Trylist from "./trylist";

function Endscreen({tryList,endGame}){    

    const restartButton = endGame ? <button>Retry</button> : null

    return (
        <>
            {restartButton}
            <div className="container">
                <Trylist tryList= {tryList}></Trylist>
            </div>
            
        </>
    )
}

export default Endscreen