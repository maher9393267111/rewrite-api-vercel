
// import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { useUpdateFilterProjectContext } from '../Context/Context';

function NavComponent() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const headings = ['All', 'Connectivity', 'Energy', 'HealthSafety', 'Material', 'Mobility', 'PlaceMaking', 'Water']
  // const updateFilter = useUpdateFilterProjectContext();
  let navigate = useNavigate();

  // function authLogin(email, password) {
  //   return true;
  // }
  function login() {
    window.alert("Successfully Logged In!")
    setLoggedIn(true)
  }

  function logOut() {
    window.alert("You are now Logged Out...")
    setLoggedIn(false)
  }

  return (
    <Navbar style={{ background: "yellow" }} background='yellow'>

      <Container>
        <Nav className="me-auto">
          {headings.map(function (item, i) {
            return <Nav.Link href={`?category=${item}`}>{item}</Nav.Link>
          })}
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Navbar.Collapse className="justify-content-end">

          </Navbar.Collapse>
        </Nav>
        {loggedIn ? null : <Container>
          {/* <Form className="d-flex">
            <Form.Control
              type="input"
              placeholder="Email"
              className="me-2"
              aria-label="Search"
            />
            <Form.Control
              type="input"
              placeholder="Password"
              className="me-2"
              aria-label="Search"
            />

            <Button style={{ minWidth: 100 }} variant="outline-success" onClick={loggedIn ? logOut : login}>Log In</Button>

          </Form> */}
        </Container>}

        {/* <Form className="d-flex">
                  <Form.Control
                    type="input"
                    placeholder="Email"
                    className="me-2"
                    aria-label="Search"
                  />
                   <Form.Control
                    type="input"
                    placeholder="Password"
                    className="me-2"
                    aria-label="Search"
                  />
                  
                  <Button variant="outline-success">Login</Button>

                </Form> */}
        {loggedIn ? <Button style={{ minWidth: 100 }} variant="outline-success" onClick={loggedIn ? logOut : login}>Log Out</Button> : <Button style={{ margin: 5, minWidth: 100 }} variant="outline-success" onClick={loggedIn ? logOut : login}>Log In</Button>}
        <Button style={{ margin: 5, minWidth: 100 }} onClick={()=>navigate("register")}>Register</Button>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
