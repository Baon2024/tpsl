"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState, useEffect } from "react"




export default function EmptyContainer({/*modalBox, message, setMessage, subject, setSubject, setModalBox*/}) { 

  const [ modalBox, setModalBox ] = useState(false); //can easily move to child component - i think??
  const [ message, setMessage ] = useState(''); //can easily move to child component
  const [ subject, setSubject ] = useState('');//can easily move to child component
    

    function modalBoxHandler() {
      
        if (modalBox) {
            setModalBox(false);
            console.log("modal box is:", modalBox);
        } else {
            setModalBox(true);
            console.log("modal box is:", modalBox);
        }
    }

    async function handleSubmit() {

        const dataToSend = {
            subject: subject,
            message: message
        }
        console.log("data to send is:", dataToSend);

        if (subject && message) {
            try {
                const response = await fetch("http://localhost:3000/api/sendEmail", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify( dataToSend ),
                });
                //const data = await response.json();
                console.log("response from function to send email data to backend:", response);
                if (response.ok === true) {
                    alert("message successfully sent");
                    setModalBox(false);
                }
            } catch (error) {
                console.error(error);
                console.log("An error occurred, please try again later");
            }
        }
    }



    return (
      <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl mb-6">Get in touch</h1>
          <p className="text-lg leading-8 text-muted-foreground mb-10">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <Dialog open={modalBox} onOpenChange={setModalBox}>
            <DialogTrigger asChild>
              <Button size="lg" onClick={modalBoxHandler} className="rounded-full px-8">
                Contact Us
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Send a message</DialogTitle>
                <DialogDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this about?"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you need help with..."
                    className="min-h-[120px]"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="button" onClick={handleSubmit}>
                  Send message
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Decorative background element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
)
}