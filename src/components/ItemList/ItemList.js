 import React, { useEffect, useState } from 'react'
import { Mensaje } from '../Mensaje'
import { Tarjeta } from '../Tarjeta/Tarjeta'
import  servidortorre1  from '../Data/servidortorre1.png'
import servidorrack1 from '../Data/servidorrack1.png'


    const arregloServidores = [
        {
            nombre: 'Torre',
            poder:'1 (uno) Intel® Xeon® 4210R (2.4GHz / 10-core / 100W) (hasta 2)',
            imagen: servidortorre1
        },
        {
            nombre: 'Rack',
            poder:"Intel® Xeon® E-2314 (4-Core, 2.8 GHz)",
            imagen:  servidorrack1
        },
    
    ]

export const ItemList = () => {
    const [servidores, setServidores] = useState([]);

    const obtenerServidores = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(arregloServidores)
            }, 3000);
            
        })
    }

    useEffect(()=>{
        const funcionAsincrona = async()=>{
            try {
                const listado = await obtenerServidores();
                setServidores(listado);
                console.log('listado',listado);
            } catch (error) {
                console.log("hubo un error")
            }
        }
        funcionAsincrona();
    },[])

    return (
        <div className='listContainer'>
            <Mensaje/>
            <div className='cardsContainer'>{
                servidores.length>0 &&
                <>
                <Tarjeta servidor={servidores[0]}/>
                <Tarjeta servidor={servidores[1]}/>
                </>
            }
              
                
            
                {
                   servidores.map((servidor)=>{
                        return(
                            <Tarjeta servidor={servidor}/>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ItemList
