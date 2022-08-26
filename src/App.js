
import './App.css';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar';
import CardWidget from './Components/CardWidget'; 
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';

function App(){


  const agregar = (contador) =>{
    console.log("funcion agregar",contador)
  };
    

  return (
    
   <div className="App">
    
      <header className="App-header">  


       <NavBar></NavBar>
       <CardWidget></CardWidget>
       <Alert titulo="Servicio" tiempo="1777" > </Alert> 
       <ItemListContainer></ItemListContainer>
       <ItemCount stock={10} initial={1} agregarProducto={agregar}></ItemCount>
      </header>
    </div>
  
  );
}

export default App;
