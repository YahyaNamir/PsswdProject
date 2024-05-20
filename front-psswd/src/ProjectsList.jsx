// src/pages/ProjectsList.js
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectList = ({ setProjectSelected }) => {
  // Mock project data
  const projects = [
    { id: 1, name: "Project A" },
    { id: 2, name: "Project B" },
    { id: 3, name: "Project C" },
  ];

  const handleProjectClick = (projectId) => {
    setProjectSelected(projectId);
  };

  const { projectId } = useParams();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-2">
            <Link
              to={`/project/${project.id}`}
              onClick={() => handleProjectClick(project.id)}
              className="text-blue-500 hover:underline"
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
