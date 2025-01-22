import { Button } from "@/components/ui/button"
import { MessageSquare, Sparkles, Send, ArrowRight, Mail, Star, Rocket, Heart, CloudLightningIcon as Lightning } from 'lucide-react'






export default function ContactButton() {

    function handleClick() {
        //code to make 
    }


return (
   
   
    <>
    <div className="flex flex-col items-center gap-4">
      <Button
        size="lg"
        className="relative bg-gradient-to-r from-primary to-purple-600 px-8 transition-all hover:scale-105"
        onClick={() => handleClick()}
      >
         <span className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Contact Me
          </span>
      </Button>
    </div>
    </>
)


}