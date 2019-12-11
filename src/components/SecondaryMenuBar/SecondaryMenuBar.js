import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const SecondaryMenuBar = () => (
  <Navbar bg="secondary" variant="dark">
    <NavDropdown title="Videos" id="basic-nav-dropdown">
      <NavDropdown.Item as={Link} to="/videos/new">
        Add new
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item as={Link} to="/videos">
        View all
      </NavDropdown.Item>
    </NavDropdown>
  </Navbar>
);

export default SecondaryMenuBar;
