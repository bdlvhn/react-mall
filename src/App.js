import logo from "./logo.svg";
import { Navbar, Container, Nav, NavDropdown, Carousel } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from "./data.js";

function App() {
  let [cs, setCs] = useState([data]);

  const Card = (props) => {
    return (
      <div className="col-md-4">
        <img
          src={`/images/image0${props.i + 1}.jpg`}
          width="100%"
          height="200px"
        />
        <h4>{props.row.title}</h4>
        <p>{props.row.content}</p>
        <p>{props.row.price}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Console Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="background">
        <h1>Seasonal Sale</h1>
        <p>lorem</p>
      </div>
      <div className="container">
        <div className="row">
          {cs[0].map((row, i) => (
            <Card row={row} i={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
