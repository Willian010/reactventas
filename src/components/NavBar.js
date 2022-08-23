import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
;
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand href="#home">Sistema de gestion</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Webs-Apps</Nav.Link>
            <Nav.Link href="#pricing">Facturacion afip</Nav.Link>
            <NavDropdown title="Redes Sociales" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tik-Tok</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Mas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Datos empresariales</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Adminitradores de negocio
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        <button className='carro'><img src='https://cdn-icons-png.flaticon.com/512/107/107831.png'/></button>
    </Navbar>
    
  );
  
  }
 


export default CollapsibleExample;


