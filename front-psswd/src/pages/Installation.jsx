import React from "react";
import { useParams } from "react-router-dom";
function Installation() {
  const { projectId } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Installation for Project {projectId}</h1>
      <p className="text-gray-700 text-base leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ad
        dignissimos dolorem eveniet hic iste labore...
      </p>
    </div>
  );
}

export default Installation;
