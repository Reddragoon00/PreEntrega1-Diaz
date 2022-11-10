import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <>
      <Navbar className='navbar-style' bg="dark" variant="dark">
        <Container className="navbar-style">
          <div>
            <img className = "img" src={require('../Images/CTB-Logo.png')}/>
            <Navbar.Brand href="#home">Celulares TodoBusca</Navbar.Brand>
          </div>
          <div>
            <Nav className="navbar-style btn-group">
              <Link to="/" className='btn btn-dark'>
                Inicio
              </Link>
              <Link to="/category/celulares" className='btn btn-dark'>
                Celulares
              </Link>
              <Link to="/category/accesorios" className='btn btn-dark'>
                Accesorios
              </Link>
              <Link to="/Checkout" className='btn btn-dark'>
                Checkout
              </Link>
              <Link to="/Contacto" className='btn btn-dark'>
                Contacto
              </Link>
            </Nav>
          </div>
            <CartWidget />
        </Container>
      </Navbar>
      <br />
    </>
  );
}