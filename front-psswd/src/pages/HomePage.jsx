import React from "react";
import { useParams } from "react-router-dom";
import MyProjectsList from "./MyProjectsList";

const HomePage = ({ setProjectSelected }) => {
  const { projectId } = useParams();
  return (
    <div className="mt-16 p-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to PSSWD</h1>
      <MyProjectsList setProjectSelected={setProjectSelected} />
    </div>
  );
};

export default HomePage;
