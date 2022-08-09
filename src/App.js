import React, {useState} from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import "./estilo.css";
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  
  return (

    <>

    <NavBar/>
    <ItemListContainer greeting = "Bienvenido a nuestra landing"/>
    <ItemCount stockInicial = "1" stockMaximo = "10"/>
    </>
  );

}

export default App;
