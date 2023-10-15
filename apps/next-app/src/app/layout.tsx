import GoogleAnalyticsScript from '@/app/GoogleAnalyticsScript';
import NavBar from '@/app/NavBar';
import AuthProvider from '@/app/auth/Provider';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
});

const myLocalFont = localFont({
  src: '../../public/fonts/ResotE-Rose-89c1.woff',
  variable: '--font-resotE-Rose',
});

export const metadata: Metadata = {
  title: 'The Ultimate Next.js Series',
  description: '[Code With Mosh] The Ultimate Next.js Series [ENG, 2023]',
  openGraph: {
    title: '...',
    description: '...',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <GoogleAnalyticsScript />
      <body className={myLocalFont.variable}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
