import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopMenu from "./menus/TopMenu";
import Sidebar from "./menus/Sidebar";
import RightSideMenu from "./menus/RightSideMenu";
import Introduction from "./pages/Introduction";
import CDC from "./pages/Cdc";
import Installation from "./pages/Installation";
import Technologies from "./pages/Technologies";
import Ci_cd from "./pages/Ci_cd";
import Architectures from "./pages/Architectures";
import Update from "./pages/Update";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import Domain from "./pages/Domain";
import Details_S from "./pages/Details_S";
import Details_D from "./pages/Details_D";
import Subscription_D from "./pages/Subscription_D";
import Subscription_S from "./pages/Subscription_S";
import Logout_D from "./pages/Logout_D";
import Logout_S from "./pages/Logout_S";
import HomePage from "./pages/HomePage";

function App() {
  const [projectSelected, setProjectSelected] = useState(() => {
    const savedProject = localStorage.getItem("projectSelected");
    return savedProject ? JSON.parse(savedProject) : null;
  });

  const projects = [
    { id: 1, name: "Project A" },
    { id: 2, name: "Project B" },
    { id: 3, name: "Project C" },
  ];
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopMenu />
        <div className="flex flex-1">
          <Sidebar
            projectId={projectSelected}
            setProjectSelected={setProjectSelected}
            projects={projects}
          />
          <main className="flex-1 flex p-8 bg-white ml-64 mr-16 overflow-y-auto">
            <Routes>
              <Route
                path="/"
                element={<HomePage setProjectSelected={setProjectSelected} />}
              />
              <Route
                path="/project/:projectId/introduction"
                element={<Introduction />}
              />
              <Route path="/project/:projectId/cdc" element={<CDC />} />
              <Route
                path="/project/:projectId/installation"
                element={<Installation />}
              />
              <Route
                path="/project/:projectId/technologies"
                element={<Technologies />}
              />
              <Route path="/project/:projectId/ci_cd" element={<Ci_cd />} />
              <Route
                path="/project/:projectId/architectures"
                element={<Architectures />}
              />
              <Route path="/project/:projectId/update" element={<Update />} />
              <Route path="/project/:projectId/help" element={<Help />} />
              <Route
                path="/project/:projectId/settings"
                element={<Settings />}
              />
              <Route
                path="/project/:projectId/details_S"
                element={<Details_S />}
              />
              <Route
                path="/project/:projectId/details_D"
                element={<Details_D />}
              />
              <Route
                path="/project/:projectId/subscription_D"
                element={<Subscription_D />}
              />
              <Route
                path="/project/:projectId/subscription_S"
                element={<Subscription_S />}
              />
              <Route
                path="/project/:projectId/logout_D"
                element={<Logout_D />}
              />
              <Route
                path="/project/:projectId/logout_S"
                element={<Logout_S />}
              />
              <Route path="/project/:projectId/domain" element={<Domain />} />
            </Routes>
          </main>
          <RightSideMenu setProjectSelected={setProjectSelected} />
        </div>
      </div>
    </Router>
  );
}

export default App;
