// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

export const metadata = {
  title: 'Syifa Rafifah - Portofolio',
  description: 'Portofolio Web Developer & AppSheet Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
