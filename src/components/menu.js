import React, { useState } from "react";
import "../App.css";
import { BubblyLink } from "react-bubbly-transitions";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={menuOpen ? "open" : null}>
        <button type="button" className="burger" onClick={toggleSidebar} />
        <img className="logo" src={require("../assets/image.png")} alt="logo" />
        <div className="sidebar">
          <header className="sidebar-header" />

          <nav className="sidebar-menu">
            <BubblyLink
              colorStart="#162030"
              colorEnd="#0d1117"
              onClick={toggleSidebar}
              to="/"
            >
              <img src={require("../assets/image-home.png")} alt="home" />
              <span>Home</span>
            </BubblyLink>
            <BubblyLink
              colorStart="#162030"
              colorEnd="#0d1117"
              onClick={toggleSidebar}
              to="/about"
            >
              <img src={require("../assets/image-about.png")} alt="home" />
              <span>About</span>
            </BubblyLink>
            <BubblyLink
              colorStart="#162030"
              colorEnd="#0d1117"
              onClick={toggleSidebar}
              to="/stack"
            >
              <img src={require("../assets/image-stack.png")} alt="home" />
              <span>Toolbox</span>
            </BubblyLink>
            <BubblyLink
              colorStart="#162030"
              colorEnd="#0d1117"
              onClick={toggleSidebar}
              to="/projects"
            >
              <img src={require("../assets/image-projects.png")} alt="home" />
              <span>Projects</span>
            </BubblyLink>
            <></>
          </nav>
        </div>
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
