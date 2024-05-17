import React from "react";
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

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to PSSWD </h1>
      <p>This is the homepage.</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <TopMenu />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-8 bg-white overflow-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/cdc" element={<CDC />} />
              <Route path="/installation" element={<Installation />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/ci_cd" element={<Ci_cd />} />
              <Route path="/architectures" element={<Architectures />} />
              <Route path="/update" element={<Update />} />
              <Route path="/help" element={<Help />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/details_S" element={<Details_S />} />
              <Route path="/details_D" element={<Details_D />} />
              <Route path="/subscription_D" element={<Subscription_D />} />
              <Route path="/subscription_S" element={<Subscription_S />} />
              <Route path="/logout_D" element={<Logout_D />} />
              <Route path="/logout_S" element={<Logout_S />} />
              <Route path="/domain" element={<Domain />} />
            </Routes>
            <RightSideMenu />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
