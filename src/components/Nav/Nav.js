import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <CartWidget/>
        <Navbar.Brand href="index.html">Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#Ofertas">Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Iluminacion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sillas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sillones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Estanterias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Decoracion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Sinfoniers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Mesitas de noche</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Muebles de exterior</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Muebles de palets</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.0">Recibidor</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;