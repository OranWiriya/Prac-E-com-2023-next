import { CssBaseline, ThemeProvider } from '@mui/material';
import './globals.css';
import type { Metadata } from 'next';
import theme from '@/config-mui/theme';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Fashion Website',
  description: 'practice-Typescript-Web',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <Navbar />
          {children}
          </body>
      </ThemeProvider>
    </html>
  );
}
