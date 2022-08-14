import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function Register() {

  const [userData, setUserData] = useState({ firstName: "" }, { lastName: "" });
  let navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("api/add-user", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(userData),
    }).then(
      window.alert("Registered Successfully!")
    ).then(window.location.href = "/");
  }

  function handleChanges(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  }

  return (
    <main>
      <Form style={{ display: "flex", flexDirection: "column", maxWidth: 300, margin: 50, gap: 10 }}>
        <h2 style={{ textAlign: "center" }}>Register!</h2>
        <div>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            name="firstName"
            autoComplete="off"
            onChange={handleChanges}
            required
          />
        </div>
        <div>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            name="lastName"
            autoComplete="off"
            onChange={handleChanges}
            required
          />
        </div>
        <div>
        <Form.Label>E-mail:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"
                    name="email"
                    autoComplete="off"
                    onChange={handleChanges}
                    required />
        </div>
        <div>
          <Form.Label>District :</Form.Label>
          <Form.Select name="District" onChange={handleChanges}>
            <option>Select Your District...</option>
            <option value="One">District One</option>
            <option value="Two">District Two</option>
            <option value="Three">District Three</option>
            <option value="Four">District Four</option>
            <option value="Five">District Five</option>
            <option value="Six">District Six</option>
          </Form.Select>
        </div>
        <Button
          onClick={handleSubmit}
        >
          Register !
        </Button>
        <Button
          onClick={() => {
            navigate("/")
          }}
        >
          Go Back
        </Button>
      </Form>
    </main>
  );
}
