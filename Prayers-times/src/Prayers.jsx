
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./card.css";
import './App.css'
// eslint-disable-next-line react/prop-types
export default function Prayers({praye ,time,image}) {

  return (
    <div className='card  tajawal-extralight'>
     <img src={image} alt="ggg" className='card-image'/> 
     <div className='times'>
     <h2>{praye}</h2>
     <p style={{fontSize:"80px", marginTop:"-25px"}}>{time}</p>
     </div>
     
    </div>
  )
}
