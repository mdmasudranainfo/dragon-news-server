import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";
import LestSide from "../LeftSide/LestSide";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const logOutHanlar = () => {
    // console.log("hello");
    logOut();
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">Dragon News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Features</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link>{user?.displayName}</Nav.Link>
              <Nav.Link>
                {/*  */}
                {user ? (
                  <>
                    {user?.photoURL && (
                      <Image
                        roundedCircle
                        style={{ width: 30 }}
                        src={user.photoURL}
                      ></Image>
                    )}

                    <button onClick={logOutHanlar} className="btn">
                      log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="btn">
                      Login
                    </Link>
                    <Link to="/register" className="btn">
                      register
                    </Link>
                    <FaUserAlt></FaUserAlt>
                  </>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <div className=" d-block d-lg-none">
                  <LestSide></LestSide>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
