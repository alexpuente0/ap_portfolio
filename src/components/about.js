/* eslint-disable react/no-unescaped-entities */
/* eslint-disable global-require */
const About = () => (
  <div className="pagecontainer">
    <h1> About Me </h1>
    <div className="page-content">
      <p>
        {' '}
        Hello! I'm Alex, a versatile full-stack web developer with a
        background in both HR and psychology. This unique combination has
        given me a fresh perspective on web development and how to approach
        projects from both a technical and a human perspective.
      </p>
      <p>
        {' '}
        My passion for web development stems from my love of creating websites
        that are not only visually appealing, but also user-friendly and easy
        to navigate. I have collaborated with teams of graphic designers and
        other web developers in the past and have honed my skills in
        wireframing, design, and development. I am a strong leader who can
        effectively guide and motivate teams to achieve project goals.
      </p>
      <p>
        {' '}
        In my free time, I love to travel and explore new cultures. I'm
        originally from Monterrey, Mexico and when I'm not coding, I enjoy
        listening to music, playing video games, cooking, and brewing beer.
        I'm always looking to learn new things and stay up-to-date with the
        latest tech trends.
      </p>
      <p>
        {' '}
        I'm an analytical problem-solver who thrives in challenging
        environments. Currently, I'm interested in remote work opportunities
        and I'm confident that my skills and experience would be a great fit
        for your team. I'm excited about the opportunity to bring my passion
        for web development and my unique perspective to your projects.
      </p>
      <div className="profilepic-container">
        <img
          src={require('../assets/myphoto.jpg')}
          alt="itsme"
          className="profilepic"
        />
      </div>
    </div>
    <div>
      <ul className="contact-bar">
        <li>
          <a href="https://github.com/alexpuente0">
            <img
              className="contactbar-img icon"
              src={require('../assets/github.png')}
              alt="github logo"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alex-puente-farias/">
            <img
              className="contactbar-img icon"
              src={require('../assets/linkedin.png')}
              alt="linkedin logo"
            />
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/alejandro-puente-3">
            <img
              className="contactbar-img icon"
              src={require('../assets/peace.png')}
              alt="peace logo"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/zero_rock">
            <img
              className="contactbar-img icon"
              src={require('../assets/twitter.png')}
              alt="twitter logo"
            />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@zero.con.z">
            <img
              className="contactbar-img icon"
              src={require('../assets/them.png')}
              alt="them logo"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default About;
