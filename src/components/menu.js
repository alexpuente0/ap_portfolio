/* eslint-disable global-require */
import React from 'react';
import '../App.css';
import { BubblyLink } from 'react-bubbly-transitions';

const Menu = () => (
  <>
    <div>
      <img className="logo" src={require('../assets/image.png')} alt="logo" />
      <div className="sidebar">
        <header className="sidebar-header" />

        <nav className="sidebar-menu">
          <BubblyLink
            colorStart="#162030"
            colorEnd="#0d1117"
            to="/"
          >
            <img src={require('../assets/image-home.png')} alt="home" />
            <span>Home</span>
          </BubblyLink>
          <BubblyLink
            colorStart="#162030"
            colorEnd="#0d1117"
            to="/about"
          >
            <img src={require('../assets/image-about.png')} alt="home" />
            <span>About</span>
          </BubblyLink>
          <BubblyLink
            colorStart="#162030"
            colorEnd="#0d1117"
            to="/stack"
          >
            <img src={require('../assets/image-stack.png')} alt="home" />
            <span>Toolbox</span>
          </BubblyLink>
          <BubblyLink
            colorStart="#162030"
            colorEnd="#0d1117"
            to="/projects"
          >
            <img src={require('../assets/image-projects.png')} alt="home" />
            <span>Projects</span>
          </BubblyLink>
          <></>
        </nav>
      </div>
    </div>
  </>
);

export default Menu;
