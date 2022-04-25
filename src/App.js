import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from "./data.js";
import Detail from "./Detail.js";

import { Link, Route, Switch } from "react-router-dom";

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
              <Nav.Link>
                {" "}
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
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
      <Switch>
        <Route exact path="/">
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
        </Route>
        <Route path="/detail/:id">
          <Detail data={cs} />
        </Route>
        <Route path="/:id">
          <div>아무거나 적었을 때</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
