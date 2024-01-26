import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Componente } from './components/Componente';

function App() {

   const datos = {
    grupo:1,
    clase: "b",
   }

  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      <Componente nombre="Americo" apellido="Chiclana" datos={datos}/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
