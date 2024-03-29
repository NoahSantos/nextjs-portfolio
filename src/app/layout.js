import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '../components/Nav';
import Contact from '../components/Contact';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "My website portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <Contact/>
        {children}
      </body>
    </html>
  );
}
