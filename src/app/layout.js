import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapProvider from "@/helpers/providers/bootstrap-provider";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Search Bar",
  description: "Our Search Bar with NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapProvider>
          <Navbar/>
          {children}
        </BootstrapProvider>
      </body>
    </html>
  );
}
