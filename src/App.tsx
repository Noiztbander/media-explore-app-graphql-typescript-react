import React from "react";
import { HashRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import { Detailed } from "./pages/detailed";
import { Home } from "./pages/home";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Detailed />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
