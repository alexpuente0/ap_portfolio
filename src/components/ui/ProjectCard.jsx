import styles from './ProjectCard.module.css';

const pad = (n) => String(n).padStart(2, '0');

const ProjectCard = ({ project, index, total }) => (
  <article className={styles.card}>
    <div className={styles.left}>
      <div className={styles.numWrap}>
        <span className={styles.num} aria-hidden="true">{pad(index)}</span>
        <span className={styles.numLabel}>
          {pad(index)}
          <span aria-hidden="true"> / </span>
          {pad(total)}
        </span>
      </div>
      <dl className={styles.meta}>
        <div className={styles.metaRow}>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>
        <div className={styles.metaRow}>
          <dt>Stack</dt>
          <dd>{project.tags.join(' · ')}</dd>
        </div>
        <div className={styles.metaRow}>
          <dt>Code</dt>
          <dd>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.repoLink}
            >
              github ↗
            </a>
          </dd>
        </div>
      </dl>
    </div>
    <div className={styles.right}>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer noopener"
        className={styles.imageLink}
      >
        <div className={styles.plinth}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
            loading="lazy"
          />
        </div>
      </a>
      <div className={styles.footer}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.cta}
          >
            View project
            <span aria-hidden="true"> →</span>
          </a>
        </div>
        <p className={styles.description}>{project.description}</p>
      </div>
    </div>
  </article>
);

export default ProjectCard;
