import './Alert.css';



function Alert({titulo , tiempo}){
    /*console.log(props)
    console.log(props.titulo)*/
    //className='Alerta-contenedor'
    return (
        
        <div className='Alerta-contenedor'> 
            
           
            <p>{titulo} {tiempo}</p>
           
            
            
            <h1> Empresarial </h1>
        
        </div>
    
    )
}

export default Alert;

