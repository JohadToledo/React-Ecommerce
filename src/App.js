import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js'


function App() {
  return (
    <div className="App">
    <div><Navbar /></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> y guarda para ver cambios.
        </p>
        
        <a
          className="App-link"
          href="https://codealo.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende con Codealo Camp
        </a>
      </header>
    </div>
  );
}

export default App;
