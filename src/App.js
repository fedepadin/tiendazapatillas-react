import logo from './logo.svg';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import "./estilo.css";



const App = () => {
  return (

    <>
    <NavBar/>
    <ItemListContainer greeting = "Bienvenido a nuestra landing"/>
    </>
  );

}

export default App;
