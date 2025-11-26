import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import AuthProvider from '@/Context/AuthProvider';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'BongoCart',
  description: ' Choose your fashion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <AuthProvider>
          {/* Navbar fixed top */}
          <Navbar className="fixed top-0 left-0 w-full z-50" />

          {/* Content area */}
          <main className="flex-1 mt-(--navbar-height) bg-zinc-200">
            {children}
          </main>

          {/* Footer fixed bottom */}
          <Footer className="fixed bottom-0 left-0 w-full z-50" />
        </AuthProvider>
      </body>
    </html>
  );
}
