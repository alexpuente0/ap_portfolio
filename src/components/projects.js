import projectDetails from "./data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {

  return (
    <div className="pagecontainer">
      <h1>Projects</h1>
      <p>
        Here you can find some of my projects. I'm always looking for new
        challenges, so if you have an idea for a project, please get in touch.
      </p>
      <div className="spinner">
<div
  style={{
    paddingBottom: '30px',
    position: 'relative',
    width: '95%'
  }}
>
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
          {projectDetails.map((project) => (
            <div key={project.id} className="card">
              <img src={project.image} alt={project.name} className="cardimg" />

              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button type="button">
                {" "}
                <a href={project.link}>See more</a>
              </button>
            </div>
          ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;