import { useDarkMode } from './userDarkMode';

export const ToggleDarkMode = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <label>
      <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)} />
      Dark Mode
    </label>
  );
};
