import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
//import {CardWidget} from './Components/CardWidget';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand href="#home">Pagina web ++ Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Email Marketing</Nav.Link>
            <Nav.Link href="#pricing">Apps</Nav.Link>
            <NavDropdown title="Dominio + Hosting" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Web Hosting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cloud Hosting
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Servidores Dedicados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Dominios .COM.AR y .AR
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Promo Empresa</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              SSL
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
  );
 
  }
 


export default CollapsibleExample;


