
import './App.css';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar';
import CardWidget from './Components/CardWidget'; 
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import ItemList  from './Components/ItemList/ItemList';
import ItemDetalleContainer from './Components/ItemDetalleContainer/ItemDetalleContainer';
import {BrowserRouter , Routes, Route} from 'react-router-dom';

function App(){

 
  const agregar = (contador) =>{
    console.log("funcion agregar",contador)
  };
    

  return (
    <BrowserRouter>
    
   <div className="App">
    
      <header className="App-header">  
       
       <NavBar></NavBar>
       <Routes>
        <Route path='/' element={<ItemList/>}/>
        <Route path='/Carrito' element={<CardWidget/>}/>
        <Route path='/promo' element={<Alert/>}/>
       </Routes>
       <CardWidget></CardWidget>
       <Alert titulo="Servicio" tiempo="1777" > </Alert> 
       <ItemListContainer></ItemListContainer>
       <ItemCount stock={10} initial={1} agregarProducto={agregar}></ItemCount>
       <ItemList/>
       <ItemDetalleContainer/>

      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
