
/*import React, { useState } from 'react'
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
export default Tarjeta;*/
import './Item.css';
import {Link} from 'react-router-dom';

export const Item = ({item})=>{
    return(
        <div className="tarjeta-producto">
            <img src={item.pictureUrl} alt={item.title}/>
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button className='boton-ver'>Ver detalle...</button>
            </Link>
        </div>
    )
}