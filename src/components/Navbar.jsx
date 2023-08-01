import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import rw from "../Images/RW.svg";
import { StateContext } from "../context/statesContext";
import { useContext } from "react";

export default function Navbar(props) {
  const { menuOpen, toggleMenu } = useContext(StateContext);

  return (
    <nav className="navbar">
      <Link to={""}>
        <img src={rw} className="logo" alt="logo" />
      </Link>
      {menuOpen ? <AiOutlineClose className="menu-icon" onClick={toggleMenu} /> : <AiOutlineMenu className="menu-icon" onClick={toggleMenu} />}
    </nav>
  );
}
