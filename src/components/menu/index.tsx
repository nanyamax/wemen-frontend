import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import useStore from '../../store/useStore';

function Menu() {
  const { isLoggedIn } = useStore();

  return (
    <>
      <Navbar key={'expand'} expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Wemen</Navbar.Brand>
          <Navbar.Toggle aria-controls={`navbar-menu-expand`} />
          <Navbar.Offcanvas
            id={`navbar-menu-expand`}
            aria-labelledby={`navbar-menu-label-expand`}
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`navbar-menu-label-expand`}>
                Wemen
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/">
                  <span className="menu-btns">Home</span>
                </Link>
                {isLoggedIn && (
                  <Link to="/dashboard">
                    <span className="menu-btns">Dashboard</span>
                  </Link>
                )}
                <Link to="/login">
                  <span className="menu-btns">Login</span>
                </Link>
                <Link to="/signup">
                  <span className="menu-btns">Signup</span>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
