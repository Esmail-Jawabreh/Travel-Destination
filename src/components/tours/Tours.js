const data = require ("../../data/db.json");

function Tours(){
    return(
        <>
            <h2>Cities</h2>
            {data.map((item)=>{
                return (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name}></img>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}

export default Tours;