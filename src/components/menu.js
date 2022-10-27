import React, { useState } from "react";
import '../App.css';
import { BubblyLink } from "react-bubbly-transitions";

const Menu = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* <div
        className="hamburger"
        id="hamburger"
        role="presentation"
        onClick={handleHamburgerClick}
      >
        <div className="slice" />
      </div> */}
      <div className={menuOpen ? "open" : null}>
        <nav className="sidebar">
          <div className="sidebar-inner">
            <header className="sidebar-header">
              <button
                type="button"
                className="sidebar-burger"
                onClick={toggleSidebar}
              ></button>
              <img
                src="../assets/blocklord-logo.png"
                className="sidebar-logo"
                alt="logo"
              />
            </header>
            <nav className="sidebar-menu">
              <BubblyLink
                colorStart="#162030"
                colorEnd="#0d1117"
                onClick={toggleSidebar}
                to="/"
              >
                <img src={require("../assets/home.png")} alt="home" />
                Home
              </BubblyLink>
              <BubblyLink
                colorStart="#162030"
                colorEnd="#0d1117"
                onClick={toggleSidebar}
                to="/about"
              >
                <img src={require("../assets/user.png")} alt="home" />
                About
              </BubblyLink>
              <BubblyLink
                colorStart="#162030"
                colorEnd="#0d1117"
                onClick={toggleSidebar}
                to="/stack"
              >
                <img src={require("../assets/icon-levels.png")} alt="home" />
                Toolbox
              </BubblyLink>
              <BubblyLink
                colorStart="#162030"
                colorEnd="#0d1117"
                onClick={toggleSidebar}
                to="/projects"
              >
                <img src={require("../assets/icon-home.png")} alt="home" />
                Projects
              </BubblyLink>
              <></>
            </nav>
          </div>
        </nav>
      </div>
    </>
  );
};

  // const [navbar, setNavbar] = React.useState("invisible");

  // const handleHamburgerClick = () => {
  //   setNavbar(navbar === "invisible" ? "" : "invisible");
  // };

  // return (
  //   <header>
      // <div
      //   className="hamburger"
      //   id="hamburger"
      //   role="presentation"
      //   onClick={handleHamburgerClick}
      // >
      //   <div className="slice" />
      // </div>
  //     <nav className={navbar}>
  //       <ul className="navigator">
  //         <li>
  //           <NavLink onClick={handleHamburgerClick} to="/">
  //             Home
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink onClick={handleHamburgerClick} to="/about">
  //             About me
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </nav>
  //   </header>
  // );
  //};

export default Menu;
