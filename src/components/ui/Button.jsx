import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import styles from './Button.module.css';

const Button = ({
  variant = 'primary',
  to,
  href,
  children,
  type = 'button',
  onClick,
  disabled,
  trailing = '→',
  bubbly = true,
}) => {
  const { bubble } = useTheme();
  const className = `${styles.btn} ${styles[variant]}`;

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {trailing && <span aria-hidden="true" className={styles.trailing}>{trailing}</span>}
    </>
  );

  if (to) {
    if (bubbly) {
      return (
        <Link
          to={to}
          className={className}
          {...bubble}
          duration={900}
        >
          {content}
        </Link>
      );
    }
    return (
      <a href={to} className={className}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer noopener"
      >
        {content}
      </a>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
