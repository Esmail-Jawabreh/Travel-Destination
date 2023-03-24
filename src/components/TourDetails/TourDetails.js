import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/db.json'
import './TourDetails.css'


function TourDetails() {
    const params = useParams();
    const details = data.filter(item => item.id === params.id)[0]
    const [showLines, setShowLines] = useState(false);
    function onClickBtn() {
        showLines ? setShowLines(false) : setShowLines(true)
    }

    // condition ? return this statment if true : return this statment if false
    return (

        <div className='div'>
            <h3 className='h'>  <u>{details.name}</u> </h3>
            <img src={details.image} alt={details.name} className='img'></img>
            <div className='div2'>
                <p className={showLines ? '' : 'showLess'}>{details.info}</p>
                <button onClick={onClickBtn} className='btn'>{showLines ? "Read less" : "Read more"}</button>
            </div>
            <p className='p'>Price: {details.price}$</p>
        </div>

    )
}


export default TourDetails;