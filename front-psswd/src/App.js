import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopMenu from "./menus/TopMenu";
import Sidebar from "./menus/Sidebar";
import RightSideMenu from "./menus/RightSideMenu";
import Introduction from "./pages/Introduction";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to IWACLUB</h1>
      <p>This is the homepage.</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopMenu />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-8 bg-white relative">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/introduction" element={<Introduction />} />
              <Route path="/cdc" element={<h1>cdc</h1>} />
              <Route path="/installation" element={<h1>Installation</h1>} />
              <Route path="/technologies" element={<h1>technologies</h1>} />
              <Route path="/ci_cd" element={<h1>ci_cd</h1>} />
              <Route path="/architectures" element={<h1>architectures</h1>} />
              <Route path="/update" element={<h1>update</h1>} />
              <Route path="/help" element={<h1>help</h1>} />
              <Route path="/settings" element={<h1>settings</h1>} />
              <Route path="/details" element={<h1>details</h1>} />
              <Route path="/subscription" element={<h1>subscription</h1>} />
              <Route path="/logout" element={<h1>logout</h1>} />
              <Route path="/domain-details" element={<h1>domain-details</h1>} />
              <Route
                path="/domain-subscription"
                element={<h1>domain-subscription</h1>}
              />
            </Routes>
            <RightSideMenu />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
