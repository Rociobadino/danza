import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
    <header>
    <NavBar/>
    </header>
    <main>
    <ItemListContainer greetings={'DANCE COMPANY'}/>
    </main>
    </div>
  );
}

export default App;

//rafce para hacer funciones por default