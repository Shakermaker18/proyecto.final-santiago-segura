// import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
// import Button from './components/Button';
// import Box from './components/Box';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Counter from './components/counter';
import ItemCount from './components/ItemCount/ItemCount';
import CartWidget from './components/CartWidget/CartWidget';
// import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/CartWidget' element={<CartWidget/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      </Routes>
      {/* <Button color="green">
        <p>Correo electronico</p>
      </Button> */}
      {/* <Box titulo='prop greeting' /> */}
      <ItemListContainer greating="Mi catalogo de productos" />
      {/* <Counter /> */}
      <ItemCount />
      <CartWidget />
      {/* <ItemDetailContainer></ItemDetailContainer> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
