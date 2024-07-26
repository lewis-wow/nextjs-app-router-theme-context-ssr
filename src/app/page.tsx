'use client';

import { useTheme } from '@/components/ThemeContext';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <main>theme: {theme}</main>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch theme</button>
    </div>
  );
}
