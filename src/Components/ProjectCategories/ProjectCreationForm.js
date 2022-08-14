import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function ProjectCreationForm() {

  const [projectData, setProjectData] = useState({ projectName: "" }, { description: "" }, { category: "" });
  let navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("api/add-project", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(projectData),
    }).then(
      window.alert("Project Created Successfully!")
    ).then(window.location.href = "/")
  }

  function handleChanges(event) {
    setProjectData({ ...projectData, [event.target.name]: event.target.value });
  }

  return (
    <main>
          <Form style={{ display: "flex", flexDirection: "column", maxWidth: 300, margin: 50, gap: 10 }}>
            <h2 style={{ textAlign: "center" }}>Create A New Project!</h2>
            <p style={{ textAlign: "center" }}>Here you can create a new project for the community to vote on!</p>
            <div>
              <Form.Label>Project Name:</Form.Label>
              <Form.Control
                name="title"
                autoComplete="off"
                onChange={handleChanges}
                required
              />
            </div>
            <div>
              <label>Project Description :</label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                autoComplete="off"
                onChange={handleChanges}
                required
              />
            </div>
            <div>
              <div>
                <Form.Label>Project Category :</Form.Label>
                <Form.Select name="category" onChange={handleChanges}>
                  <option>Select The Project Category...</option>
                  <option value="Connectivity">Connectivity</option>
                  <option value="Energy">Energy</option>
                  <option value="HealthSafety">Health And Safety</option>
                  <option value="Material">Materials</option>
                  <option value="Mobility">Mobility</option>
                  <option value="PlaceMaking">Place Making</option>
                  <option value="Water">Water</option>
                </Form.Select>
              </div>
            </div>
              <Button
                onClick={handleSubmit}
              >
                Create !
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
