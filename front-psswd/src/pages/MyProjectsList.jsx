import React from "react";
import { Link } from "react-router-dom";

const MyProjectsList = ({ setProjectSelected }) => {
  const projects = [
    { id: 1, name: "Project A" },
    { id: 2, name: "Project B" },
    { id: 3, name: "Project C" },
  ];

  const handleProjectClick = (projectId) => {
    setProjectSelected(projectId);
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
      <ul className="divide-y divide-gray-200">
        {projects.map((project) => (
          <li key={project.id} className="py-4">
            <Link
              to={`/project/${project.id}/introduction`}
              onClick={() => handleProjectClick(project.id)}
              className="block text-lg text-gray-800 font-medium hover:text-white hover:bg-blue-600 hover:shadow-md px-4 py-2 rounded-md transition duration-400"
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProjectsList;
