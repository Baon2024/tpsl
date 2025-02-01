"use client"
import localFont from "next/font/local";
import "./globals.css";
import Header from './components/header'
import { useState, createContext } from "react";
import { SchoolCompareProvider } from "./schoolCompareContext";
import { useSchoolCompare } from "./schoolCompareContext";
import { Link } from "lucide-react";
import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";
import { useRouter } from "next/navigation";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/*export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};*/

export default function RootLayout({ children }) {

  //const { schoolsToCompare, setSchoolsToCompare } = useSchoolCompare();
  


  return (
    <html lang="en">
      <SchoolCompareProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          <Header />
          <main>{children}</main>
          
            <FixedBottomButton />
          
       
      </body>
      </SchoolCompareProvider>
    </html>
  );
}

const FixedBottomButton = () => {

  const router = useRouter();

  const { schoolsToCompare } = useSchoolCompare();

  if (schoolsToCompare.length === 0) return null;
  //can't use schoolsToCompare in the parent above the SchoolCompareProvider, so have to do this instead

  function schoolsToCompareHandler() {
    router.push('/SchoolsToCompare');
  }

  return (
    
    <button
      
      onClick={schoolsToCompareHandler}
      style={{
        position: "fixed",
        bottom: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#007bff",
        color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        zIndex: 9999, // Ensures it's above all elements
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      compare schools
    </button>
    
  );
};
