import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  const onAdd =(count)=>{
      alert(`Agregaste ${count} items al carrito`)
  }

  return (
    <>
      {/*
      <NavBar />
      <ItemListContainer greeting={"Mensaje enviado desde App.js"}/>
      <ItemCount stock={5} initial={1} onAdd={onAdd} /

sdd

  */}
  <ItemDetailContainer />
    </>
  );
}

export default App;
