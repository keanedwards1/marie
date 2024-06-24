/* // src/components/ThemeSwitcher.tsx
import { useEffect, useState } from 'react';

const themes = {
  light: 'autumn',
  dark: 'dark'
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light;
    setTheme(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-primary">
      Toggle Theme
    </button>
  );
};

export default ThemeSwitcher; */
