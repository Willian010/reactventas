/*import {React } from 'react'
import ItemCount from '../Components/ItemCount';


export const ItemDetalleContainer = () => {
    const onAdd = (count) =>{
     return(   
     
        )
   
     <ItemCount  initial={1} stock={10}  onAdd={}/>
    
    
        

}

export default ItemDetalleContainer;*/s


import { useState, useEffect } from "react";
//import './ItemDetailContainer.css';
import { arregloProductos } from "../../baseDatos/baseDatos";
import { ItemDetalle } from "../ItemDetalle/ItemDetalle";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const {productId} = useParams();

    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const product = arregloProductos.find(item=>item.id === parseInt(id));
            resolve(product)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}