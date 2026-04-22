import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SectionLabel from '../../components/ui/SectionLabel';
import PageNumeral from '../../components/ui/PageNumeral';
import ProjectCard from '../../components/ui/ProjectCard';
import projects from '../../data/projects';
import styles from './Projects.module.css';

const responsive = {
  desktop: { breakpoint: { max: 4000, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 767, min: 0 }, items: 1 },
};

const Arrows = ({ next, previous, goToSlide }) => (
  <div className={styles.controls}>
    <button type="button" className={styles.arrowBtn} onClick={previous}>
      <span aria-hidden="true">←</span>
      {' '}
      Previous
    </button>
    <button type="button" className={styles.arrowBtn} onClick={next}>
      Next
      {' '}
      <span aria-hidden="true">→</span>
    </button>
    <span className="sr-only">
      <button type="button" onClick={() => goToSlide(0)}>First</button>
    </span>
  </div>
);

const Projects = () => {
  const [, setIndex] = useState(0);
  const ordered = [...projects].sort((a, b) => a.id - b.id);
  const total = ordered.length;

  return (
    <section className={styles.page}>
      <PageNumeral value="04" position="top-left" />

      <div className={styles.container}>
        <header className={styles.head}>
          <SectionLabel index="04" title="Projects" />
          <h1 className={styles.title}>
            Selected
            {' '}
            <em>work</em>
            .
          </h1>
          <p className={styles.subtitle}>
            Drag, swipe, or use the arrows. Each entry links to its repository —
            the projects, not the commit histories, are the portfolio.
          </p>
        </header>

        <div className={styles.carouselWrap}>
          <Carousel
            responsive={responsive}
            arrows={false}
            showDots
            infinite
            draggable
            swipeable
            keyBoardControl
            pauseOnHover
            autoPlaySpeed={6000}
            customButtonGroup={<Arrows />}
            renderButtonGroupOutside
            dotListClass={styles.dotList}
            afterChange={(_, state) => setIndex(state.currentSlide)}
            containerClass={styles.carouselContainer}
            itemClass={styles.carouselItem}
            sliderClass={styles.carouselSlider}
          >
            {ordered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 1} total={total} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
