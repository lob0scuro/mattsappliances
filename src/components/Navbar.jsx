import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/matts-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      <img src={Logo} onClick={() => navigate("/")} />
      <FontAwesomeIcon icon={faBars} className="menu-bars" />
    </header>
  );
};

export default Navbar;
