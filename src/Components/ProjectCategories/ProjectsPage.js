

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from './ProjectCard'
// import { useFilterProjectContext } from '../Context/Context';
import Button from 'react-bootstrap/Button';

export default function ProjectsPage() {
  const [projectData, setProjectData] = useState([]);
  // const [filteredData, setFilteredData] = useState([])
  // const projectFilter = useFilterProjectContext();
  //const projectFilter = 'Connectivity'
  let navigate = useNavigate()
  let params = new URLSearchParams(window.location.search);
  let currentCategory = params.get("category");

  async function getData() {
    let allProjects = await fetch("api/get-all-projects");
    allProjects = await allProjects.json();
    if (!currentCategory || currentCategory === "All") {
      setProjectData(allProjects);
    } else {
      let currentData = []
      allProjects.forEach((project) => {
        if (project.category === currentCategory) {
          currentData.push(project)
        }
        setProjectData(currentData);
      })
    }
    //   if (projectFilter !== '') {
    //    setFilteredData(allProjects.filter(project => {
    //     return project.category === projectFilter
    //    })
    //   )
    //  }
    //   else setFilteredData(allProjects)
    //   console.log(allProjects)
    //   console.log('filteredData', filteredData)
  }
  useEffect(() => {
    getData()
  }, []);


  return (
    <div className="project-page">
      <h3 style={{ margin: 20 }}>Vote for your favorite city project! or <Button onClick={() => navigate("create-project")}>Create a New Project!</Button></h3>
      <p>Here you can vote for your favorite project the city should work on!<br />Highest ranked projects will appear first.</p>
      {projectData.map((project, index) => {
        return (
          <>
            <div key={index} className="project-cards">
              <ProjectCard title={project.title} description={project.description} numberOfVotes={project.numberOfVotes} category={project.category} thumbsUp={project.thumbsUp} thumbsDown={project.thumbsDown} />
            </div>
          </>
        );
      })}
    </div>
  );
}
