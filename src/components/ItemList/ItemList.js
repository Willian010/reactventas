import React, { useEffect, useState } from 'react'
import { Mensaje } from '../Mensaje/Mensaje'
import { Tarjeta } from '../Tarjeta/Tarjeta'




    const arregloServidores = [
        {
            nombre: 'HPE ProLiant ML350 Gen10 Xeon 4210R (Torre)',
            poder:'1 (uno) Intel® Xeon® 4210R (2.4GHz / 10-core / 100W) (hasta 2)',
            imagen: 'https://numir.com.ar/wp-content/uploads/2022/04/P19116-001-HPE-ProLiant-ML110-Gen10-Torre.png'
        },
        {
            nombre: 'HPE ProLiant DL20 Gen10 Plus (Rack)',
            poder:"Intel® Xeon® E-2314 (4-Core, 2.8 GHz)",
            imagen: 'https://numir.com.ar/wp-content/uploads/2022/04/P17080-B21-HPE-ProLiant-DL20-Gen10-Rack.png'
        },
    
    ]

export const Landing = () => {
    const [servidor, setServidores] = useState([]);

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
            <div className='cardsContainer'>
              
                {
                   servidor.map((servidor)=>{
                        return(
                            <Tarjeta servidor={servidor}/>
                        )
                    })
                }
            </div>
        </div>
    )
}