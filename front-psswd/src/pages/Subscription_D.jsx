import React from "react";

const Subscription_D = () => {
  const roleMap = {
    Admin: "Full Access",
    Developer: "Edit Access",
    Designer: "Read Only",
    Viewer: "No Access",
    Manager: "Limited Access",
  };

  const accessData = [
    {
      project: "Project A",
      role: "Admin",
      email: "admin@ex.com",
    },
    {
      project: "Project A",
      role: "Developer",
      email: "developer1@ex.com",
    },
    {
      project: "Project B",
      role: "Designer",
      email: "designer@ex.com",
    },
    {
      project: "Project B",
      role: "Developer",
      email: "developer2@ex.com",
    },
    {
      project: "Project C",
      role: "Admin",
      email: "admin2@ex.com",
    },

    {
      project: "Project C",
      role: "Designer",
      email: "designer2@ex.com",
    },
    {
      project: "Project D",
      role: "Admin",
      email: "admin3@ex.com",
    },
    {
      project: "Project D",
      role: "Developer",
      email: "developer3@ex.com",
    },
    {
      project: "Project D",
      role: "Designer",
      email: "designer3@ex.com",
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col w-full p-4">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-gray-900 text-center w-full mb-6">
          Project Access
        </h1>
        <div className="overflow-hidden rounded-lg shadow-xl w-full">
          <table className="w-full bg-white shadow-lg hover:shadow-xl">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Access
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {accessData.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-50 hover:bg-gray-100"
                      : "bg-white hover:bg-gray-100"
                  }
                >
                  <td className="py-4 px-6 whitespace-nowrap">
                    {item.project}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">{item.role}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {roleMap[item.role]}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subscription_D;
