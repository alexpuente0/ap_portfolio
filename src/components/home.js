const Home = () => {
  return (
    <div className="pagecontainer">
      <p>
        Welocme to My portfolio! I'm Alex, a full stack web developer from
        Monterrey, Mexico. Here you can find some info about me and my projects.
      </p>

      <img className="home-image" src={require("../assets/home-image.jpg")} alt="computer" />

      <p>
        I'm always interested in hearing about new projects, so if you'd like to
        chat please get in touch. You can reach me @{" "}
        <a href={"mailto:manu.puente@hotmail.com"}>manu.puente@hotmail.com </a>
        or through my social media links.
      </p>
    </div>
  );
}

export default Home;