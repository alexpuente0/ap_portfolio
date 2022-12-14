const Home = () => {
  return (
    <div className="pagecontainer">
      <div className="page-content">
        <h1>Welcome to My portfolio!</h1>
        <p>
          I'm Alex, a full stack web developer from Monterrey, Mexico. Here you
          can find some info about me and my projects.
        </p>

        <img
          className="home-image"
          src={require("../assets/home-image.jpg")}
          alt="computer"
        />

        <p>
          I'm always interested in hearing about new projects, so if you'd like
          to chat please get in touch. You can reach me @{" "}
          <a href={"mailto:manu.puente@hotmail.com"}>
            manu.puente@hotmail.com{" "}
          </a>
          or through my social media links.
        </p>
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
}

export default Home;