import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AppBody from './components/AppBody';
import Checkout from './components/Checkout';
import Contacto from "./components/Contacto";
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        {/* <Route path='/item/:itemId' element={<ItemDetailContainer />} /> */}
      </Routes>
      <AppBody/>
      <Footer/>
    </BrowserRouter>
     
  )
}

export default App;
