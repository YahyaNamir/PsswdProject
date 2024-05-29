import React from "react";
import MyProjectsList from "./MyProjectsList";

const HomePage = ({ setProjectSelected }) => {
  return (
    <div className="mt-10 w-full p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to PSSWD</h1>
      <MyProjectsList setProjectSelected={setProjectSelected} />
    </div>
  );
};

export default HomePage;
