import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../actions';

const Header = () => {
  const dispatch = useDispatch();
  const { userLoggedIn } = useSelector((state) => state.postReducer);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" as={Link} to="/" className="nav-title">
            <img
              src="https://png.pngtree.com/element_our/sm/20180601/sm_914a778f0cd2329fa970696b2c086dd8.jpg"
              // src="https://image.pngaaa.com/863/5443863-middle.png"
              height="60px"
            />
            Movie Bazar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#movies" as={Link} to="/movies">
                Movies
              </Nav.Link>
              <Nav.Link href="#reviews" as={Link} to="/reviews">
                Reviews
              </Nav.Link>
              <Nav.Link href="#forum" as={Link} to="/forum">
                Forum
              </Nav.Link>
            </Nav>
            {userLoggedIn ? (
              <Nav className="ml-auto">
                <Nav.Link
                  href="#pricing"
                  as={Link}
                  to="/"
                  onClick={() => dispatch(logOut())}
                >
                  Logout
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                <Nav.Link href="#signup" as={Link} to="/signup">
                  Signup
                </Nav.Link>
                <Nav.Link href="#login" as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
