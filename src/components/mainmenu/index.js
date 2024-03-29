import React from "react";

import "./mainmenu.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../img/mainlogo.jpg";
import { Outlet, Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <>
      <div className="mainmenu">
        <Navbar expand="lg" className="py-1 px-1 px-md-3" sticky="top" >
          <Container fluid>
            <Navbar.Brand >
              <Link to="/">
                <img src={Logo} alt="main-logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/psychices" className="nav-link">Our Psychics</Link>
                <Link to="/blogs" className="nav-link">Blogs</Link>
                <Link to="/aboutus" className="nav-link">About Us</Link>
                <Link to="/HowitWorks" className="nav-link">How it works</Link>
                <Link to="/contactus" className="nav-link">Contact us</Link>
              </Nav>
              <Nav className="ml-auto nav-logins">
                <Link
                  to="/"
                  className="mx-1 rejister-link my-1 my-lg-0 nav-link"
                >
                  Register{" "}
                </Link>
                <Link
                  to="/"
                  className="mx-1 login-link my-1  my-lg-0 nav-link"
                >
                  Login
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default MainMenu;
