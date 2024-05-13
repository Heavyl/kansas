

function Trylist({tryList}){

    
    let list = tryList.split(',');
    list = list.filter(n => n);

    const listItem = list.map((element,index)=>
        <li key={index}>{element}</li>
    )

    return (
        <>
            <ul className="try-list">             
                {listItem}
            </ul>
        </>
        
    )
}

export default Trylist