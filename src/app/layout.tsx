import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const GA_MEASUREMENT_ID = 'G-4YH7DBQJPX';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Gray Kuglen',
    template: '%s | Gray Kuglen',
  },
  description:
    'Product designer building data-driven applications for real estate and financial services.',
  keywords: [
    'Product Design',
    'UX',
    'Real Estate',
    'Financial Services',
    'Data-Driven',
    'Gray Kuglen',
  ],
  authors: [{ name: 'Gray Kuglen' }],
  creator: 'Gray Kuglen',
  publisher: 'Gray Kuglen',
  robots: { index: true, follow: true },
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon/favicon.ico' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }],
  },
  openGraph: {
    title: 'Gray Kuglen',
    description:
      'Product designer building data-driven applications for real estate and financial services.',
    siteName: 'Gray Kuglen',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gray Kuglen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gray Kuglen',
    description:
      'Product designer building data-driven applications for real estate and financial services.',
    images: ['/og-image.jpg'],
    creator: '@graykuglen',
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
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
