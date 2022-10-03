import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Main from './components/Main'
import ItemDetail from './components/ItemDetail';


function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path = {'/'} element={<Main/>}></Route>
      <Route path = {'/bailarines'} element={<ItemListContainer greetings={'DANCE COMPANY'}/>}></Route>
      <Route path = {'bailarines/item/:id'} element={<ItemDetail/>}></Route>
    </Routes>
   </BrowserRouter>
  
    {/* <ItemListContainer greetings={'DANCE COMPANY'}/> */}
 
    </div>
  );
}



export default App;

//rafce para hacer funciones por default