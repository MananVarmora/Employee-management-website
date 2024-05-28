import React from 'react';
import './Projects.css'; // Import your CSS file
const Projects = () => {
  const handleAddProject = () => {
    // Implement the logic for adding a new project here
    alert('Add Project button clicked');
  };

  const handleUpdateProject = (projectId) => {
    // Implement the logic for updating the project with the specified projectId here
    alert(`Update Project button clicked for Project ${projectId}`);
  };

  const handleDeleteProject = (projectId) => {
    // Implement the logic for deleting the project with the specified projectId here
    alert(`Delete Project button clicked for Project ${projectId}`);
  };

  return (
    <div>
      <h1>Employee Management System Projects</h1>
      <p>Welcome to the Projects Page of our Employee Management System.</p>

      <div className="project-actions">
        <button className="add-button" onClick={handleAddProject}>Add Project</button>
      </div>

      <h2>Current Projects</h2>
      {/* Current projects content */}
      {/* For each current project, include the following structure */}
      <div className="project">
        <div className="project-details">
          <h3>Project 1: Employee Database Enhancement</h3>
          <p>
            We are currently working on improving our employee database system to handle a larger number of records efficiently.
          </p>
        </div>
        <div className="project-actions">
          <button className="update-button" onClick={() => handleUpdateProject(1)}>Update Project</button>
          <button className="delete-button" onClick={() => handleDeleteProject(1)}>Delete Project</button>
        </div>
        <div className="project-image">
          <img src="/images/project1-image.jpeg" alt="Project 1" />
        </div>
      </div>
      <div className="project">
        <div className="project-details">
          <h3>Project 2: Payroll Automation</h3>
          <p>
            Our team is automating the payroll processing to streamline salary payments for employees.
          </p>
        </div>
        <div className="project-actions">
          <button className="update-button" onClick={() => handleUpdateProject(2)}>Update Project</button>
          <button className="delete-button" onClick={() => handleDeleteProject(2)}>Delete Project</button>
        </div>
        <div className="project-image">
          <img src="/images/project2-image.jpeg" alt="Project 2" />
        </div>
      </div>

      <div className="project">
        <div className="project-details">
          <h3>Project 3: Employee Portal Redesign</h3>
          <p>
            We are redesigning the employee portal to enhance the user experience and provide better access to information.
          </p>
        </div>
        <div className="project-actions">
          <button className="update-button" onClick={() => handleUpdateProject(3)}>Update Project</button>
          <button className="delete-button" onClick={() => handleDeleteProject(3)}>Delete Project</button>
        </div>
        <div className="project-image">
          <img src="/images/project3-image.jpeg" alt="Project 3" />
        </div>
      </div>
    
      <h2>Upcoming Projects</h2>
      {/* Upcoming projects content */}
      {/* For each upcoming project, include the following structure */}
      <div className="project">
        <div className="project-details">
          <h3>Project 4: Mobile App Development</h3>
          <p>
            We plan to develop a mobile app to allow employees to access their profiles and request leaves using their smartphones.
          </p>
        </div>
        <div className="project-actions">
          <button className="update-button" onClick={() => handleUpdateProject(4)}>Update Project</button>
          <button className="delete-button" onClick={() => handleDeleteProject(4)}>Delete Project</button>
        </div>
        <div className="project-image">
          <img src="/images/project4-image.jpeg" alt="Project 4" />
        </div>
      </div>
      <div className="project">
        <div className="project-details">
          <h3>Project 5: Training & Development Module</h3>
          <p>
            We will be introducing a new module for employee training and development to enhance their skills and career growth.
          </p>
        </div>
        <div className="project-actions">
          <button className="update-button" onClick={() => handleUpdateProject(5)}>Update Project</button>
          <button className="delete-button" onClick={() => handleDeleteProject(5)}>Delete Project</button>
        </div>
        <div className="project-image">
          <img src="/images/project5-image.jpeg" alt="Project 5" />
        </div>
      </div>
    </div>
      
  );
};

export default Projects;
