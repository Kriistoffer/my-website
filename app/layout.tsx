import Header from '@/components/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ActiveSectionContextProvider from '@/context/active-context-section';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kristoffer Johansson',
  description: 'Personal website of Kristoffer Johansson'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} pt-28 text-gray-950 bg-gray-50 relative sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#a03b3e] absolute -z-10 top-[-8rem] right-[-22rem] h-[31.25rem] w-[31.25rem] rounded-full sm:w-[68.75rem] dark:bg-[#4f48af] -rotate-6 blur-[10rem]"></div>

        <div className="bg-[#ff4040] absolute -z-[11] top-[38rem] left-[-40rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-35rem] dark:bg-[#676394] blur-[10rem]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
