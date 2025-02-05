import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import './loading.css';
import Layouts from '@/components/layouts';
import { ThemeProviderContext } from '@/lib/themeProviderContext';
import NextTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';
import Loading from './loading';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900', '500', '300'], // Sesuaikan dengan kebutuhan
});

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${roboto.className} antialiased`}>
        <NextTopLoader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <ThemeProviderContext
          defaultTheme="light"
          enableSystem
          attribute={'class'}
        >
          <Suspense fallback={<Loading />}>
            <Layouts>{children}</Layouts>
          </Suspense>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
