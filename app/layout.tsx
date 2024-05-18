import "../styles/globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

import Navabr from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Eco-Memories",
  description: "Converting Plastic Waste into Souvnirs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Navabr />
        {children}
      </body>
      <Footer />
    </html>
  );
}
