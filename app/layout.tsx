import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '1000'],
  variable: '--font-dm-sans',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Daniel Ekeberg',
  description: 'Daniel Ekeberg Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7255204765091044"
        crossOrigin="anonymous"
      ></script>
      <Analytics />
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
