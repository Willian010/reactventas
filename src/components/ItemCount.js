 
import { useState } from "react";
import './ItemCount.css'  
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

 
 
 export const Contador  = ({stock,  initial , agregarProducto}) => {
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
<button className="Agregar" onClick={()=>(agregarProducto(contador))}>Agregar al carro</button>
</div>
    )

 }
export default Contador;