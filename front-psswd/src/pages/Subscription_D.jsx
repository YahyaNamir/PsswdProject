import React from "react";

const Subscription_D = () => {
  const accessData = [
    {
      project: "Project A",
      role: "Admin",
      access: "Full Access",
      email: "admin@example.com",
    },
    {
      project: "Project A",
      role: "Developer",
      access: "Read Only",
      email: "developer1@example.com",
    },
    {
      project: "Project B",
      role: "Designer",
      access: "Edit Access",
      email: "designer@example.com",
    },
    {
      project: "Project C",
      role: "Admin",
      access: "Full Access",
      email: "admin2@example.com",
    },
    {
      project: "Project B",
      role: "Developer",
      access: "Edit Access",
      email: "developer2@example.com",
    },
    {
      project: "Project C",
      role: "Designer",
      access: "Read Only",
      email: "designer2@example.com",
    },
    {
      project: "Project D",
      role: "Admin",
      access: "Full Access",
      email: "admin3@example.com",
    },
    {
      project: "Project D",
      role: "Developer",
      access: "Read Only",
      email: "developer3@example.com",
    },
    {
      project: "Project D",
      role: "Designer",
      access: "Edit Access",
      email: "designer3@example.com",
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col w-full">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-gray-900 text-center w-full mb-4">
          Project Access
        </h1>
        <div className="overflow-hidden rounded-lg shadow-lg w-full">
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
                  <td className="py-4 px-6 whitespace-nowrap">{item.access}</td>
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