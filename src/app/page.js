//'use client'
import Image from "next/image";
import LandingPainPoints from "./components/landingPainPoints";
import Hero from "./components/hero";
import ItemCardList from "./components/itemCardList";
//import { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import SearchBar2 from "./components/searchBar2";
import SchoolCard from "./components/schoolCard";
import SchoolsList from "./components/schoolsList";
//import supabase from "@/lib/supabase";
import EmptyContainer from "./components/emptyContainer";
//import { useRouter } from "next/router";
import ScrollProgressBar from "./components/scrollbar";
import PricingPage from "./components/subscriptionContainer";
import { X } from "lucide-react"; // Install: npm install lucide-react
import NewsletterSignup from "./components/newsletterSignup";
//import { createClient } from "@supabase/supabase-js";
//import { useRef } from "react";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import ClientSubscriptionHandler from "./components/clientSR";
import { cookies } from 'next/headers';







export default async function Home() {

  //const [ schools, setSchools ] = useState([]); //can easily move this to child component or to getServerProps - DONE
  //const [ modalBox, setModalBox ] = useState(false); //can easily move to child component - i think??
  //const [ message, setMessage ] = useState(''); //can easily move to child component
  //const [ subject, setSubject ] = useState('');//can easily move to child component
  //const [ subscriptionModalBox, setSubscriptionModalBox ] = useState(false); //DONE
  //const [ clicks, setClicks ] = useState(0); //can easily move to child component - DONE
  //const schoolsRef = useRef(null); //not sure how to adapt this for SSR?

  /*const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey)*/

    const supabase = createServerComponentClient({ cookies });

    const { data: schools, error } = await supabase
      .from('schoolslatest')
      .select('*');
  
    if (error) {
      console.error("Error fetching schools:", error);
      return <div>Failed to load schools</div>;
    }



  //const [isMounted, setIsMounted] = useState(false);
  //const router = useRouter();

  //useEffect(() => {
    ///setIsMounted(true);
  //}, []);

  //if (!isMounted) return null; // Only prevent rendering until mounted

  // Your component logic here
  // Example: onClick handler
  /*function onClickHandler(documentId) {
    router.push(`/school/${documentId}`);
  }*/
  
    /*useEffect(() => {
      async function getSchools() {
        const { data, error } = await supabase
          .from("schoolslatest")
          .select("*");
  
        if (error) {
          console.error("Error fetching data:", error);
        } else {
          console.log("schools from Supabase:", data); // Ensure this logs correctly
          setSchools(data);
        }
      }
  
      getSchools(); // Call the function
    }, []); // Empty dependency array ensures this runs only on mount

    useEffect(() => {
      const clicksToSet = localStorage.getItem('clicks');
      console.log("clicksToSet from localStorage is:", clicksToSet);
      if (clicksToSet) {
        setClicks(clicksToSet);
      }
    },[])

    useEffect(() => {
      console.log("clicks are:", clicks);
    },[])*/
  

  /*const [ searchTerm, setSearchTerm ] = useState('');*/ //instead of searchTerm/setSearchTerm being set in client here
  //i'm setting it in useContext hook, and importing to relevant components
  //that will allow me to make the page.js into SSR

  const painPoints = [
    {
      emoji: `😫`,
      title: `Spending endless hours researching schools`,
      id: 1
    },
    {
      emoji: `💷`,
      title: `Missing out on financial aid opportunities`,
      id: 2
    },
    {
      emoji: `😔`,
      title: `Feeling overwhelmed by complex application processes`,
      id: 3
    },
  ]

  const sampleItems = [
    { id: '1', title: 'Item 1', description: 'This is the first item' },
    { id: '2', title: 'Item 2', description: 'This is the second item' },
    { id: '3', title: 'Item 3', description: 'This is the third item' },
    { id: '4', title: 'Item 4', description: 'This is the fourth item' },
    { id: '5', title: 'Item 5', description: 'This is the fifth item' },
    { id: '6', title: 'Item 6', description: 'This is the sixth item' },
  ]

  

  /*function handleCloseModal() {
    setSubscriptionModalBox(false);
  }*/

  //will need to add the useEffect API call to get list of societies here, and then pass down to the right component below

  /* 
    useEffect(() => {
      
      need to add fetched societies/(users) to local state hook (more economical)
      const returnedSocieties = fetchSocietiesAPI();
      addSocieties(returnedSocieties);
      
      }, []) 
  */



  /* i need the hero section on home page */
  return (
    
    /*<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly. are you sure tho</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>*/

    //could easily make it so that schools are fed into SchoolsList based on their ranking, by filtering above
    //and then apply different visual size for highest few, based on index position
  <>
    <ScrollProgressBar />
    <Hero /*scrollToSchools={() => schoolsRef.current?.scrollIntoView({ behavior: "smooth" })}*/ /*searchTerm={searchTerm} setSearchTerm={setSearchTerm}*/ />
    <LandingPainPoints painPoints={painPoints} />
    <SearchBar2 /*searchTerm={searchTerm} setSearchTerm={setSearchTerm}*/ />
    {/*<div ref={schoolsRef}>*/}
      <SchoolsList /*supabase={supabase}*/ schools={schools} /*searchTerm={searchTerm} setSubscriptionModalBox={setSubscriptionModalBox} setClicks={setClicks} clicks={clicks}*/ />
    {/*</div>*/}
    <NewsletterSignup />
    {/*{subscriptionModalBox && (
  

       
      <PricingPage setSubscriptionModalBox={setSubscriptionModalBox} subscriptionModalBox={subscriptionModalBox} />
    
 
)}*/}
    <ClientSubscriptionHandler /*setSubscriptionModalBox={setSubscriptionModalBox} subscriptionModalBox={subscriptionModalBox}*/ />

    {/*{ schools && schools.map((school) => (
      <p>{school.name}</p>
    ))}*/}
    <EmptyContainer /*modalBox={modalBox} setModalBox={setModalBox} message={message} setMessage={setMessage} subject={subject} setSubject={setSubject}*/ />
  </>
  );
}
