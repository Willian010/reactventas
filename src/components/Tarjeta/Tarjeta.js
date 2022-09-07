
import React, { useState } from 'react'
import './Tarjeta.css'

export const Tarjeta = ({servidor}) => {
    const [likes, setLikes] = useState(0);

    const incrementar = ()=>{
        setLikes(likes + 1);
    }
//<p>{servidor.nombre}</p>
    return (
        <div className='card'>
            <img src={servidor.imagen} alt="" className='cardImg'/>
            <p className='Parrafo'> {servidor.nombre}</p>
            <p>No likes: {likes}</p>
            <button className='bu' onClick={incrementar}>+</button>
        </div>
    )
}
export default Tarjeta;