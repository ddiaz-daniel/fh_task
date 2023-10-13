//absolute path
import './../styles/globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Junior Frontend Tasks FH OÖ Logistikum',
  description: 'Created by Daniel Diaz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics /></body>
    </html>
  );
}
