import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

const Menu = () => {
  const [navbar, setNavbar] = React.useState("invisible");
   const handleHamburgerClick = () => {
     setNavbar(navbar === "invisible" ? "" : "invisible");
   };

  return (
    <>
      <div
        className="hamburger"
        id="hamburger"
        role="presentation"
        onClick={handleHamburgerClick}
      >
        <div className="slice" />
      </div>

      <nav className={navbar}>
        <ul className="navigator">
          <li>
            <NavLink onClick={handleHamburgerClick} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleHamburgerClick} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleHamburgerClick} to="/stack">
              Toolbox
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleHamburgerClick} to="/projects">
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
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
