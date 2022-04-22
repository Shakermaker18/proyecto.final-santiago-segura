import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Button from './components/Button';
import Box from './components/Box';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Button color="green">
        <p>Correo electronico</p>
      </Button>
      <Box titulo='prop greeting' />
      <ItemListContainer />
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
