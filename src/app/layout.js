import './globals.css';
import { CssBaseline } from '@mui/material';

export const metadata = {
  title: 'Task Manager',
  description: 'Task manager built with Next.js and MUI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}

