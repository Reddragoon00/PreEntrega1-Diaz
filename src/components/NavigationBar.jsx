import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

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
            <Nav className="navbar-style">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#store">Store</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
            </Nav>
          </div>
            <CartWidget />
        </Container>
      </Navbar>
      <br />
    </>
  );
}