import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/components/ActiveSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "eidraffin",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-28 sm:pt-36 bg-black text-gray-200 text-opacity-90`}
      >    
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#111111', 
                color: '#f0f0f0',
              },
            }}
          />
        </ActiveSectionContextProvider>    
      </body>
    </html>
  );
};