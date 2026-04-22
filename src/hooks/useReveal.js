import { useEffect, useRef } from 'react';

const useReveal = (options = {}) => {
  const ref = useRef(null);
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      if (node) node.setAttribute('data-revealed', 'true');
      return undefined;
    }

    node.setAttribute('data-reveal', '');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.setAttribute('data-revealed', 'false');
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
};

export default useReveal;
