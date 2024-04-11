import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import * as React from 'react';
import Main from './components/Main/Main';
import Header from './components/header/Header';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Header />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
