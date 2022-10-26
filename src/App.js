import logo from './logo.svg';
import './App.css';
import AppBody from './components/AppBody';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
   <div> 
    <NavigationBar />
    <ItemListContainer Greeting={"¡Hola! Tenemos lo mejor en celulares para ti. Disfruta recorriendo nuestro catálogo"}/>
    <AppBody />
    <Footer />
    </div>
  )
}

export default App;
