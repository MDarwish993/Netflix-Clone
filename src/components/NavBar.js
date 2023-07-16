import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar(){
    return(
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >NETFLIX </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/FavList">Favorite </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;