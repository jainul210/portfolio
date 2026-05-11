import './globals.css';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'Jainul Abdeen — Full-Stack Developer & B.Tech CSE Student',
  description:
    'Personal portfolio of Jainul Abdeen, a B.Tech CSE student at University of Lucknow and Full-Stack Developer specializing in Next.js, React, and AI integrations.',
  keywords: ['Jainul Abdeen', 'Full Stack Developer', 'Next.js', 'React', 'Portfolio', 'B.Tech CSE', 'Lucknow'],
  authors: [{ name: 'Jainul Abdeen' }],
  openGraph: {
    title: 'Jainul Abdeen — Full-Stack Developer',
    description: 'B.Tech CSE student & Full-Stack Developer from Lucknow, building with Next.js and AI.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body><ScrollToTop />{children}</body>
    </html>
  );
}
