import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'ap-theme';
const THEMES = ['burnt', 'cool', 'atelier'];
const DEFAULT_THEME = 'burnt';

const BUBBLE_COLORS = {
  burnt: { colorStart: '#c8502d', colorEnd: '#1a1614' },
  cool: { colorStart: '#B83A3A', colorEnd: '#1A1715' },
  atelier: { colorStart: '#6D9BBF', colorEnd: '#1A1F1C' },
};

const readInitial = () => {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return THEMES.includes(saved) ? saved : DEFAULT_THEME;
};

const useTheme = () => {
  const [theme, setThemeState] = useState(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((next) => {
    if (THEMES.includes(next)) setThemeState(next);
  }, []);

  const cycle = useCallback(() => {
    setThemeState((prev) => THEMES[(THEMES.indexOf(prev) + 1) % THEMES.length]);
  }, []);

  return {
    theme,
    themes: THEMES,
    setTheme,
    cycle,
    bubble: BUBBLE_COLORS[theme],
  };
};

export default useTheme;
