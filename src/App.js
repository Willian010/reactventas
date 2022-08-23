
import './App.css';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar';
import CardWidget from './Components/CardWidget'; 
import ItemListContainer from './Components/ItemListContainer';


function App(){
  return (
    
    <div className="App">
      <header className="App-header">  

      
       <NavBar></NavBar>
       <CardWidget></CardWidget>
       <Alert titulo="Servicio" tiempo="1777" > </Alert> 
       <ItemListContainer></ItemListContainer>

       
      </header>
    </div>
  
  );
}

export default App;
