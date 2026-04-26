import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Metafi - Modern Next.js Template',
    template: '%s | Metafi',
  },
  description:
    'A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Template',
    'Shadcn/UI',
    'Web Development',
  ],
  authors: [{ name: 'Metafi Team' }],
  creator: 'Metafi Team',
  publisher: 'Metafi',
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/images/layout/favicon.ico', sizes: '48x48' },
      { url: '/images/layout/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/layout/favicon.ico' },
    ],
    shortcut: [{ url: '/images/layout/favicon.ico' }],
  },
  openGraph: {
    title: 'Metafi - Modern Next.js Template',
    description:
      'A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.',
    siteName: 'Metafi',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Metafi - Modern Next.js Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metafi - Modern Next.js Template',
    description:
      'A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.',
    images: ['/og-image.jpg'],
    creator: '@metafi',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`h-screen ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
