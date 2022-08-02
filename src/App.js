import React, {useState} from 'react';
import logo from './logo.svg';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import "./estilo.css";




const App = () => {
  
  return (

    <>

    <NavBar/>
    <ItemListContainer greeting = "Bienvenido a nuestra landing"/>
    <ItemCount/>
    </>
  );

}

export default App;
