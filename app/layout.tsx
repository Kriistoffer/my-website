import Header from '@/components/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ActiveSectionContextProvider from '@/context/active-context-section';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import LanguageSwitch from '@/components/language-switch';

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
      <body
        className={`${inter.className} pt-28 text-gray-950 bg-gray-50 relative sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        <div className="bg-[#a03b3e] absolute -z-10 top-[-8rem] right-[-22rem] h-[31.25rem] w-[31.25rem] rounded-full sm:w-[36rem] dark:bg-[#4f48af] -rotate-6 blur-[10rem]"></div>

        <div className="bg-[#ff4040] absolute -z-10 top-[88rem] rotate-45 blur-[10rem] right-[-22rem] h-[31.25rem] w-[31.25rem] rounded-full sm:w-[36rem] dark:bg-[#4f48af]"></div>

        <div className="bg-[#ff4040] absolute -z-[10] top-[38rem] left-[-44rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[54rem] md:w-[54rem] lg:w-[54rem] xl:w-[58rem] 2xl:w-[68rem] dark:bg-[#676394] blur-[10rem]"></div>

        <div className="bg-[#ff4040] absolute -z-[10] top-[208rem] left-[-44rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[54rem] md:w-[54rem] lg:w-[54rem] xl:w-[58rem] 2xl:w-[68rem] dark:bg-[#4f48af] rotate-90 blur-[10rem]"></div>

        <div className="bg-[#a03b3e] absolute -z-[10] bottom-[-2rem] left-1/2 -translate-x-1/2 h-[6.25rem] w-[10rem] rounded-full sm:w-[54rem] md:w-[54rem] lg:w-[54rem] xl:w-[58rem] 2xl:w-[60rem] dark:bg-[#4f48af] blur-[10rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-right" />
            <Footer />
            <LanguageSwitch />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
