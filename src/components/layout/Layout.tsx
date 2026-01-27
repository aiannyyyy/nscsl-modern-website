import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Watermark from '../Watermark';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Watermark />
      <Navbar />
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}