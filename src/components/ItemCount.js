 
/*import { useState } from "react";
import './ItemCount.css'  
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

 
 
 export const Contador  = ({stock,  initial , agregarProducto, onAdd}) => {
    // cuando una propiedad o una variable de estado cambie el componente vuelve a renderizarce.//
    const [contador, setContador,]= useState(initial);
    
    const incrementar = () =>{
        if(contador<stock){
            setContador(contador + 1) 
        }
    }
    const decrementar = () =>{
        if(contador>0){
            setContador(contador - 1)
        }
    }
    return(
<div>
    <p>Vacantes limitadas, pedi el tuyo</p>
<ButtonGroup aria-label="Basic example">
<Button variant="secondary" onClick={incrementar}>+</Button>
<Button variant="secondary" >{contador}</Button>
<Button variant="secondary" onClick={decrementar}>-</Button>
</ButtonGroup>
<button className="Agregar" disabled={stock ===0} onClick={  () =>onAdd(count)}>Agregar al carro</button>
</div>
    )

 }
export default Contador;

//onClick={()=>(agregarProducto(contador))}*/
import {useState} from 'react';
import './ItemCount.css';

export const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial);

    const decrementar = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const incrementar = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }

    return(
        <div className='estilosContador'>
            <p>Stock disponible: {stock}</p>
            <div className='contenedorControles'>
                <button disabled={stock===0} onClick={decrementar} className='botonControl'>-</button>
                <p>{count}</p>
                <button disabled={stock===0} onClick={incrementar} className='botonControl'>+</button>
            </div>
            <button disabled={stock === 0} className='botonAgregar' onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}