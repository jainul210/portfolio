import './globals.css';
import ScrollToTop from '@/components/ScrollToTop';
export const metadata = {
  title: 'Jainul Abdeen — Full-Stack Developer & AI Explorer',
  description:
    'Personal portfolio of Jainul Abdeen, B.Tech CSE student at University of Lucknow. Full-stack web developer and Python data science practitioner building with Next.js, FastAPI, and AI/ML tooling.',
  keywords: [
    'Jainul Abdeen',
    'Full Stack Developer',
    'Python',
    'Data Science',
    'FastAPI',
    'Next.js',
    'React',
    'Machine Learning',
    'scikit-learn',
    'RepoRaft',
    'CalPrice',
    'B.Tech CSE',
    'University of Lucknow',
  ],
  authors: [{ name: 'Jainul Abdeen' }],
  openGraph: {
    title: 'Jainul Abdeen — Full-Stack Developer & AI Explorer',
    description:
      'B.Tech CSE student at University of Lucknow building high-performance web apps, Python data science pipelines, and ML models.',
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
