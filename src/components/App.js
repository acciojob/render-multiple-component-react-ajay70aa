import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      id: 1,
      name: "Weather App",
      description: "A web app to display weather information using API."
    },
    {
      id: 2,
      name: "Todo List",
      description: "Manage daily tasks with a CRUD todo list app."
    },
    {
      id: 3,
      name: "E-Commerce Site",
      description: "An online store with product listings and cart feature."
    }
  ];
  const Project = ({name, description}) => {
    return (
      <div className="ns-wrapper">
        <h1 data-ns-test="project-name">{name}</h1>
        <h6 data-ns-test="project-description">{description}</h6>
      </div>
    )
  }
  return (
    <div id="main">
      {projects.map((project) => {
        return (
          <Project key={project.id} name={project.name} description={project.description}/>
        )
      })}
    </div>
  )
}

export default App;
