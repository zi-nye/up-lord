import React from "react";
import routes from "./Routes/router";
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {Link, NavLink, Route, Routes} from "react-router-dom";

const App = () => {
  const navs = routes.map(({name, route, hidden}) => {
    if (hidden) {
      return;
    }

    return <NavLink key={route} to={route}>{name}</NavLink>
  })

  return (
      <div className="App">
          <Container fluid>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#">UP-LORD</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav"/>
              <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                  {navs}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Row>
              <Col sm={2} className="sidebar">
                <Nav className="flex-column">
                  {navs}
                </Nav>
              </Col>
              <Col sm={10} className="main-content">
                <Routes>
                  {routes.map(({name, route, component}) =>
                      <Route key={route} path={route} element={component}/>
                  )}
                </Routes>
              </Col>
            </Row>
          </Container>
      </div>
  );
};

export default App;
