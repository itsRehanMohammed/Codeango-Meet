import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  // const [openSaved, setopenSaved] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  return (
    <>
      <div className="container-nav">
        <nav className="navbar">
          <div className="left">
            <Link to="/">
              <h4 className="brand">CODEANGO MEETS</h4>
            </Link>
          </div>
          {}
          <div className={`${openMenu ? " active right" : "right close"} `}>
            <ul className="navbar-ul">
              <li onClick={() => setopenMenu(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/about">About Us</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/contact">Contact</Link>
              </li>

              <div className="login" onClick={() => setopenMenu(false)}>
                <Link to="/login"> Login </Link>
              </div>
              <div className="signup" onClick={() => setopenMenu(false)}>
                <Link to="/signup"> Sign Up </Link>
              </div>
            </ul>
          </div>
        </nav>
        <div className="menu">
          {openMenu ? (
            <span className="close-menu" onClick={() => setopenMenu(!openMenu)}>
              <CloseIcon />
            </span>
          ) : (
            <span className="open-menu" onClick={() => setopenMenu(!openMenu)}>
              <MenuIcon />
            </span>
          )}
        </div>
      </div>
      {/* {openSaved && <Saved toggleSaved={toggleSaved} saved={saved} setsaved={setsaved} />} */}
    </>
  );
};

export default Navbar;
