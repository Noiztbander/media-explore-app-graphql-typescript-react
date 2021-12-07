import React from "react";
import Characters from "../components/Characters/Characters";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="body">
      <header className="p-4">
        <nav className="d-flex justify-content-between align-items-center w-100">
          <h4 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            Media Explorer App
          </h4>
          <h6>By Erick Noiztbander</h6>
        </nav>
      </header>
      <section>
        <Characters />
      </section>
    </main>
  );
};
