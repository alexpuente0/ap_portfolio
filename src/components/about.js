const About = () => {
  return (
    <div className="pagecontainer">
      <h1> About Me </h1>
      <div className="page-content">
        <p>
          {" "}
          Hello! My name is Alex, and I am a full stack web developer with a
          background in human resources and psychology. I am passionate about
          creating beautiful and functional web applications.
        </p>
        <p>
          {" "}
          In my previous work experiences, I have worked with teams of graphic
          designers and web developers, which has given me a solid set of tools
          to wireframe, design, and develop great projects. I've also developed
          strong leadership skills and, as a lifelong learner, im always
          looking for new opportunities to learn and grow.
        </p>
        <p>
          {" "}
          I am from Monterrey, Mexico. I enjoy music, travel, tech, and
          videogames. I also enjoy cooking and ocasionally homebrewing some
          beer.
        </p>
        <p>
          {" "}
          I'm a problem solver, and I love a challenge and a good cup of coffee.
          I'm currently looking for new remote work opportunities, and I hope
          you have a new challenge for me to solve.
        </p>
        <div className="profilepic-container">
          <img
            src={require("../assets/myphoto.jpg")}
            alt="itsme"
            className="profilepic"
          />
        </div>
      </div>
      <div>
        <ul class="contact-bar">
          <li>
            <a href="https://github.com/alexpuente0">
              <img
                class="contactbar-img icon"
                src={require("../assets/github.png")}
                alt="github logo"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alex-puente-farias/">
              <img
                class="contactbar-img icon"
                src={require("../assets/linkedin.png")}
                alt="linkedin logo"
              />
            </a>
          </li>
          <li>
            <a href="https://angel.co/u/alejandro-puente-3">
              <img
                class="contactbar-img icon"
                src={require("../assets/peace.png")}
                alt="peace logo"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/zero_rock">
              <img
                class="contactbar-img icon"
                src={require("../assets/twitter.png")}
                alt="twitter logo"
              />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@zero.con.z">
              <img
                class="contactbar-img icon"
                src={require("../assets/them.png")}
                alt="them logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
