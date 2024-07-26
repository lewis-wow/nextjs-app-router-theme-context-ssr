'use client';

import { ReactNode } from 'react';
import { useTheme } from './ThemeContext';

export const Document = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <html lang="en">
      <body className={theme}>{children}</body>
    </html>
  );
};
