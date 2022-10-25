import React from "react";
import '../App.css';
import { BubblyLink } from "react-bubbly-transitions";

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
            <BubblyLink
              colorStart="#16203b"
              colorEnd="#0d1117"
              onClick={handleHamburgerClick}
              to="/"
            >
              Home
            </BubblyLink>
          </li>
          <li>
            <BubblyLink
              colorStart="#16203b"
              colorEnd="#0d1117"
              onClick={handleHamburgerClick}
              to="/about"
            >
              About
            </BubblyLink>
          </li>
          <li>
            <BubblyLink
              colorStart="#16203b"
              colorEnd="#0d1117"
              onClick={handleHamburgerClick}
              to="/stack"
            >
              Toolbox
            </BubblyLink>
          </li>
          <li>
            <BubblyLink
              colorStart="#16203b"
              colorEnd="#0d1117"
              onClick={handleHamburgerClick}
              to="/projects"
            >
              Projects
            </BubblyLink>
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
