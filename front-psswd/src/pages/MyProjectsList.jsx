import React from "react";
import { Link } from "react-router-dom";

const MyProjectsList = ({ setProjectSelected }) => {
  const projects = [
    {
      id: 1,
      name: "Project A",
      description: "Description of Project A",
      date: "2024-05-01",
    },
    {
      id: 2,
      name: "Project B",
      description: "Description of Project B",
      date: "2024-05-10",
    },
    {
      id: 3,
      name: "Project C",
      description: "Description of Project C",
      date: "2024-05-20",
    },
  ];

  const handleProjectClick = (project) => {
    setProjectSelected(project);
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-gray-900 mb-5">Projects</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200 text-black-900 font-semibold ">
            <th className="py-3 px-4 hover:bg-gray-400 transition duration-400 ">
              Name
            </th>
            <th className="py-3 px-4 hover:bg-gray-400 transition duration-400 ">
              Description
            </th>
            <th className="py-3 px-4 hover:bg-gray-400 transition duration-400 ">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="bg-white border-b">
              <td className="py-3 px-4">
                <Link
                  to={`/project/${project.id}/introduction`}
                  onClick={() => handleProjectClick(project)}
                  className="text-lg text-gray-800 font-medium hover:text-white hover:bg-blue-800 hover:shadow-md px-2 py-1 rounded-md transition duration-400 block"
                >
                  {project.name}
                </Link>
              </td>
              <td className="py-3 px-4">{project.description}</td>
              <td className="py-3 px-4">{project.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProjectsList;
