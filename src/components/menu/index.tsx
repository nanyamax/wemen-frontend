import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../store/useStore';
import { toast } from 'react-toastify';
import { logOutUser } from '../../store/useCheckUser';
import {
  Calculator,
  DoorClosed,
  DoorOpen,
  HouseDoor,
  PersonAdd,
} from 'react-bootstrap-icons';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useStore();
  const navigate = useNavigate();

  const toggle = () => setIsOpen((prev) => !prev);

  const onLogout = () => {
    toggle();
    logOutUser();
    setIsLoggedIn(null);
    toast.info('You have logged out successfully');
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Navbar
        key={'expand'}
        expand={false}
        sticky={'top'}
        className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Wemen</Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`navbar-menu-expand`}
            onClick={toggle}
          />
          <Navbar.Offcanvas
            show={isOpen}
            restoreFocus={false}
            id={`navbar-menu-expand`}
            aria-labelledby={`navbar-menu-label-expand`}
            placement="end">
            <Offcanvas.Header onClick={toggle} closeButton>
              <Offcanvas.Title id={`navbar-menu-label-expand`}>
                Wemen
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/" onClick={toggle}>
                  <div className="menu-btns">
                    <HouseDoor /> &nbsp; Home
                  </div>
                </Link>
                {isLoggedIn && (
                  <>
                    <Link to="/periodCalculator" onClick={toggle}>
                      <div className="menu-btns">
                        <Calculator /> &nbsp; Period Calculator
                      </div>
                    </Link>
                    <div>
                      <div
                        className="menu-btns logout-button"
                        onClick={onLogout}>
                        <DoorClosed /> &nbsp; Logout
                      </div>
                    </div>
                  </>
                )}
                {!isLoggedIn && (
                  <>
                    <Link to="/login" onClick={toggle}>
                      <div className="menu-btns">
                        <DoorOpen /> &nbsp; Login
                      </div>
                    </Link>
                    <Link to="/signup" onClick={toggle}>
                      <div className="menu-btns">
                        <PersonAdd /> &nbsp; Signup
                      </div>
                    </Link>
                  </>
                )}
              </Nav>
              <div className="user-profile">
                <div className="user-avatar"></div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
