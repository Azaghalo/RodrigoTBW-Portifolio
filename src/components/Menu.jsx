import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { StateContext } from "../context/statesContext";

export default function Menu() {
  const { toggleMenu, filterOn, toggleFilter } = useContext(StateContext);
  const currentPath = useLocation();

  const currentPage = currentPath.pathname.split("/")[2];

  return (
    <div>
      <div className="menu-back" onClick={toggleMenu} />
      <div className="menu">
        <h2>Main Menu</h2>
        <ul>
          <li className={`${currentPage === undefined ? "active-route" : ""}`} onClick={toggleMenu}>
            <Link to={""}>Home</Link>
          </li>
          <li className={`${currentPage === "about" ? "active-route" : ""}`} onClick={toggleMenu}>
            <Link to={"about"}>Sobre</Link>
          </li>
          <li className={`${currentPage === "projects" ? "active-route" : ""}`} onClick={toggleMenu}>
            <Link to={"projects"}>Projetos</Link>
          </li>
          <li className={`${currentPage === "contact" ? "active-route" : ""}`} onClick={toggleMenu}>
            <Link to={"contact"}>Contato</Link>
          </li>
        </ul>
        <div className="effect-select">
          <h3>Efeito:</h3>
          <button className={`btn-filter${filterOn ? " active-filter" : " "}`} onClick={toggleFilter}>
            ON
          </button>
          <button className={`btn-filter${!filterOn ? " active-filter" : " "}`} onClick={toggleFilter}>
            OFF
          </button>
        </div>
      </div>
    </div>
  );
}
