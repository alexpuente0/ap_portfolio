const toolbox = () => {

  const html = "./images/html.png";
  const css = "./images/css.png";
  const javascript = "./images/js.png";
  const react = "./images/react.png";
  const node = "./images/node.png";
  const redux = "./images/mongo.png";
  const git = "./images/git.png";
  const github = "./images/github.png";
  const express = "./images/figma.png";
  const mongodb = "./images/vscode.png";
  const postgresql = "./images/netlify.png";
  const heroku = "./images/heroku.png";



  return (
    <div className="pagecontainer">
      <h1>Toolbox</h1>
      <p>
        I'm a full stack web developer with a passion for learning new technologies
        and solving problems. I'm always looking for new challenges, so if you have
        an idea for a project, please get in touch.
      </p>
      <div className="techstack-container">
        <div className="techstack-item">
          <img src={html} alt="html" />
          <p>HTML</p>
        </div>
        <div className="techstack-item">
          <img src={css} alt="css" />
          <p>CSS</p>
        </div>
        <div className="techstack-item">
          <img src={javascript} alt="javascript" />
          <p>Javascript</p>
        </div>
        <div className="techstack-item">
          <img src={react} alt="react" />
          <p>React</p>
        </div>
        <div className="techstack-item">
          <img src={redux} alt="redux" />
          <p>Redux</p>
        </div>
        <div className="techstack-item">
          <img src={node} alt="node" />
          <p>Node</p>
        </div>
        <div className="techstack-item">
          <img src={express} alt="express" />
          <p>Express</p>
        </div>
        <div className="techstack-item">
          <img src={mongodb} alt="mongodb" />
          <p>MongoDB</p>
        </div>
        <div className="techstack-item">
          <img src={postgresql} alt="postgresql" />
          <p>PostgreSQL</p>
        </div>
        <div className="techstack-item">
          <img src={git} alt="git" />
          <p>Git</p>
        </div>
        <div className="techstack-item">
          <img src={github} alt="github" />
          <p>GitHub</p>
        </div>
        <div className="techstack-item">
          <img src={heroku} alt="heroku" />
          <p>Heroku</p>
        </div>
      </div>
    </div>
  );

};

export default toolbox;
