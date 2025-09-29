import React from "react";
import { Link } from "react-router-dom";
import "./taskbar.css";

const taskbar = () => {
  return (
    <section className="taskbar">
      <h2 className="titulo-taskbar">Frequência News</h2>

      <div className="container-taskbar">
        <Link to="/politica" className="links-taskbar">
          Política
        </Link>
        <Link to="/podcast" className="links-taskbar">
          PodCast
        </Link>
        <Link to="/sobre-nos" className="links-taskbar">
          Sobre Nós
        </Link>
      </div>
    </section>
  );
};

export default taskbar;
