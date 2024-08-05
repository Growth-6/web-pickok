'use client';

import { ThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';

import theme from '@/styles/theme';

const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
