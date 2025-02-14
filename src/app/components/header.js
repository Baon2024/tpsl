
'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { User } from 'lucide-react'
//import styles from './header.module.css';
import ContactButton from './contactButton';
import EnquireButton from './enquireButton';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname()
  const router = useRouter();


  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    // Initial check for JWT
    const checkJwt = () => {
      const storedJwt = localStorage.getItem('jwtTPSL')
      setJwt(storedJwt)
    }
    checkJwt()

    // Listen for changes to localStorage
    const handleStorageChange = () => {
      checkJwt()
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

    const handleSubscribeClick = () => {
      console.log("jwt is:", jwt);
      if (jwt) {
        router.push('/subscribeToTPSL') // Navigate to userPage if logged in
      } else {
        //alert('You must be logged in to access this page.')
        router.push('/logInSignUp') // Navigate to registerSociety if not logged in
      }
    }

    const handleProfileClick = () => {
      console.log("jwt is:", jwt);
      if (jwt) {
        router.push('/userPage') // Navigate to userPage if logged in
      } else {
        //alert('You must be logged in to access this page.')
        router.push('/logInSignUp') // Navigate to registerSociety if not logged in
      }
    }


  return (
    <header className="fixed top-0 left-0 w-full fixed relative isolate shadow-md z-10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold"/*{styles.header}*/>
            thePublicSchoolList
          </Link>
          
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/faq" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/faq' 
                  ? 'bg-gray-200 text-gray-900' 
                  : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              FAQ
            </Link>
            <button 
              onClick={handleSubscribeClick}  
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/subscribeToTPSL' 
                  ? 'bg-gray-200 text-gray-900' 
                  : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              Subscribe
            </button>
            <button 
              onClick={handleProfileClick} 
              className="p-2 rounded-full hover:bg-gray-200"
              aria-label="User Profile"
            >
              <User className="h-5 w-5 text-gray-700" />
            </button>
          </div>
          
        </nav>
      </div>
    </header>
  )
}
