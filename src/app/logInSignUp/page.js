'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
//import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
//import { AlertCircle } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'

export default function LogInSignUp() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [passwordRecovery, setPasswordRecovery] = useState(false)
  const [emailForRecovery, setEmailForRecovery] = useState('')

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

  async function loginSocietyHandler(e) {
    e.preventDefault()
    const dataToSend = { email: email, password: password }
    const user = await loginUser(dataToSend)
    handleAuthResponse(user)
  }

  async function registerSocietyHandler(e) {
    e.preventDefault()
    const dataToSend = { username, email, password }
    const user = await signUpUser(dataToSend)
    console.log("user from signUp function returned:", user);
    const { data: session, error } = await supabase.auth.getSession();
console.log("Supabase session:", session);
    //use user.id to then update associated user table to create entry with the same id, and null schools and false subscribed
    if (user?.user?.id) {
      // Use the user ID to update the profiles table
      console.log("user.user.is is:", user?.user?.id);
      const { error } = await supabase
          .from('profiles') // Make sure this is the correct table
          .insert([{ id: user.user.id, schools: [], subscribed: false }]); // Set default values

      if (error) {
          console.error("Error updating profiles table:", error.message);
      } else {
          console.log("Profile entry successfully created!");
      }
  }
    handleAuthResponse(user)
  }

  

  function handleAuthResponse(user) {
    if (user) {
        console.log("user before setting localStorage is:", user);
        console.log("jwt should be here:", user.session.access_token);
      setMessage(`Welcome, ${user.user.username}!`)
      localStorage.setItem('jwtTPSL', user.session.access_token)
      localStorage.setItem('userTPSL', JSON.stringify(user.user))
      router.push('/userPage')
    } else {
      setMessage('Authentication failed. Please try again.')
    }
  }

  const loginUser = async (dataToSend) => {

    console.log("dataToSend in login function is:", dataToSend);
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: dataToSend.email,
            password: dataToSend.password
        })
        if (error) throw error
        return data
    } catch (error) {
        console.error("Login Error:", error.message)
        alert(`Login error: ${error.message} `)
        return null
    }
}

const signUpUser = async (dataToSend) => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: dataToSend.email,
            password: dataToSend.password
        })
        if (error) throw error
        return data
    } catch (error) {
        console.error("Registration Error:", error.message)
        alert(`Registration error: ${error.message} `)
        return null
    }
}
  
  

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Join</CardTitle>
          <CardDescription>sign-up or log-in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">sign-up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={loginSocietyHandler} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full">Log In</Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={registerSocietyHandler} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input id="register-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full">sign up</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
        </CardFooter>
      </Card>
      
    </div>
  )
}
