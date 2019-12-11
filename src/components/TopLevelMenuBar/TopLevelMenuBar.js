import React from "react";
import { Navbar } from "react-bootstrap";

const TopLevelMenuBar = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>Username</Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default TopLevelMenuBar;
