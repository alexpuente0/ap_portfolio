import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

const Cursor = () => {
  const ringRef = useRef(null);
  const stateRef = useRef({
    x: 0, y: 0, tx: 0, ty: 0, raf: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia('(hover: none)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ring = ringRef.current;
    if (!ring) return undefined;
    const state = stateRef.current;

    const onMove = (e) => {
      state.tx = e.clientX;
      state.ty = e.clientY;
    };

    const isHoverable = (el) => {
      if (!el || el === document.body) return false;
      if (el.closest && el.closest('a, button, [role="button"], input, textarea, label')) {
        return true;
      }
      return false;
    };

    const onOver = (e) => {
      if (isHoverable(e.target)) {
        ring.setAttribute('data-hover', 'true');
      }
    };

    const onOut = (e) => {
      if (!e.relatedTarget || !isHoverable(e.relatedTarget)) {
        ring.setAttribute('data-hover', 'false');
      }
    };

    const tick = () => {
      state.x += (state.tx - state.x) * 0.18;
      state.y += (state.ty - state.y) * 0.18;
      ring.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%)`;
      state.raf = requestAnimationFrame(tick);
    };
    state.raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);
    document.body.classList.add(styles.hideNative);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(state.raf);
      document.body.classList.remove(styles.hideNative);
    };
  }, []);

  return <div ref={ringRef} className={styles.ring} aria-hidden="true" />;
};

export default Cursor;
