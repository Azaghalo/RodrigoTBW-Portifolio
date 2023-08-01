import "./pages/Style.css";
import { Outlet } from "react-router-dom";
import { StateContext } from "./context/statesContext";
import { useState } from "react";
import { Menu, Navbar, Overlay } from "./components";

export default function App() {
  const [menuState, setMenuState] = useState(false);
  const [filterState, setFilterState] = useState(true);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  const toggleFilter = () => {
    setFilterState(!filterState);
  };

  return (
    <StateContext.Provider value={{ menuOpen: menuState, toggleMenu: toggleMenu, filterOn: filterState, toggleFilter: toggleFilter }}>
      <div className="main">
        {filterState ? <Overlay /> : ""}
        <Navbar />
        {menuState ? <Menu /> : ""}
        <Outlet />
      </div>
    </StateContext.Provider>
  );
}
