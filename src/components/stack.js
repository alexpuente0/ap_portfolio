/* eslint-disable react/no-unescaped-entities */
/* eslint-disable global-require */
const toolbox = () => {
  const bootstrap = require('../assets/ts/bootstrap.png');
  const css = require('../assets/ts/css.png');
  const docker = require('../assets/ts/docker.png');
  const git = require('../assets/ts/git.png');
  const github = require('../assets/ts/github.png');
  const heroku = require('../assets/ts/heroku.png');
  const html = require('../assets/ts/html.png');
  const javascript = require('../assets/ts/javascript.png');
  const jest = require('../assets/ts/jest.png');
  const mysql = require('../assets/ts/mysql.png');
  const netlify = require('../assets/ts/netlify.png');
  const postgres = require('../assets/ts/postgres.png');
  const rails = require('../assets/ts/rails.png');
  const react = require('../assets/ts/react.png');
  const redux = require('../assets/ts/redux.png');
  const rspec = require('../assets/ts/rspec.png');
  const ruby = require('../assets/ts/ruby.png');
  const sass = require('../assets/ts/sass.png');
  const tailwind = require('../assets/ts/tailwind.png');

  return (
    <div className="pagecontainer">
      <h1>Toolbox</h1>
      <p>
        I'm a full stack web developer with a passion for learning new
        technologies and solving problems. I'm always looking for new
        challenges, so if you have an idea for a project, please get in touch.
      </p>
      <div className="techgrid">
        <div className="techstack-container">
          <div className="container-ts">
            <h3> Markup & Programming Languages</h3>
            <div className="txtimg">
              <div className="techstack-item">
                <img src={html} alt="html" className="tsicon" />
                <p>HTML</p>
              </div>
              <div className="techstack-item">
                <img src={css} alt="css" className="tsicon" />
                <p>CSS</p>
              </div>
              <div className="techstack-item">
                <img src={javascript} alt="javascript" className="tsicon" />
                <p>Javascript</p>
              </div>
              <div className="techstack-item">
                <img src={sass} alt="sass" className="tsicon" />
                <p>Sass</p>
              </div>
              <div className="techstack-item">
                <img src={ruby} alt="ruby" className="tsicon" />
                <p>Ruby</p>
              </div>
            </div>
          </div>
          <div className="container-ts">
            <h3>Frameworks & Libraries</h3>
            <div className="txtimg">
              <div className="techstack-item">
                <img src={react} alt="react" className="tsicon" />
                <p>React</p>
              </div>
              <div className="techstack-item">
                <img src={redux} alt="redux" className="tsicon" />
                <p>Redux</p>
              </div>
              <div className="techstack-item">
                <img src={rails} alt="rails" className="tsicon" />
                <p>Rails</p>
              </div>
              <div className="techstack-item">
                <img src={bootstrap} alt="bootstrap" className="tsicon" />
                <p>Bootstrap</p>
              </div>
              <div className="techstack-item">
                <img src={tailwind} alt="tailwind" className="tsicon" />
                <p>Tailwind</p>
              </div>
            </div>
          </div>
          <div className="container-ts">
            <h3> Databases</h3>
            <div className="txtimg">
              <div className="techstack-item">
                <img src={postgres} alt="postgresql" className="tsicon" />
                <p>PostgreSQL</p>
              </div>
              <div className="techstack-item">
                <img src={mysql} alt="mysql" className="tsicon" />
                <p>MySQL</p>
              </div>
            </div>
          </div>
          <div className="container-ts">
            <h3> Testing</h3>
            <div className="txtimg">
              <div className="techstack-item">
                <img src={rspec} alt="rspec" className="tsicon" />
                <p>RSpec</p>
              </div>
              <div className="techstack-item">
                <img src={jest} alt="jest" className="tsicon" />
                <p>Jest</p>
              </div>
            </div>
          </div>
          <div className="container-ts">
            <h3> Version Control</h3>
            <div className="txtimg">
              <div className="techstack-item">
                <img src={git} alt="git" className="tsicon" />
                <p>Git</p>
              </div>
              <div className="techstack-item">
                <img src={github} alt="github" className="tsicon" />
                <p>GitHub</p>
              </div>
            </div>
          </div>
          <div className="container-ts">
            <h3> Deployment</h3>
            <div className="txtimg">
              <div className="techstack-item">
                <img src={heroku} alt="heroku" className="tsicon" />
                <p>Heroku</p>
              </div>
              <div className="techstack-item">
                <img src={netlify} alt="netlify" className="tsicon" />
                <p>Netlify</p>
              </div>
              <div className="techstack-item">
                <img src={docker} alt="docker" className="tsicon" />
                <p>Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default toolbox;
