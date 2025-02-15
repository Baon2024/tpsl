"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
//import { toast } from "@/components/ui/use-toast"

export default function SimpleFeedbackForm({ schoolName }) {
  const [feedback, setFeedback] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFeedback(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const schoolFeedback = {
        feedback: feedback,
        school: schoolName,
    }
    
    try {
        const response = await fetch(`http://localhost:3000/api/feedback`, {
            method: "POST", // Assuming you're sending feedback data
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ schoolFeedback }), // Replace 'feedback' with your actual data variable
        });

        if (response.ok) {
            console.log("Feedback successfully sent to your email (via backend)!");
            setFeedback(''); // Assuming setFeedback is a state setter function
        } else {
            const errorData = await response.json();
            console.error("Failed to send feedback:", errorData);
        }
    } catch (error) {
        console.error("Error sending feedback:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
          Your Feedback
        </label>
        <Textarea
          id="feedback"
          name="feedback"
          rows={2}
          value={feedback}
          onChange={handleChange}
          placeholder="Please enter your feedback here..."
          className={error ? "border-red-500" : ""}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
      <Button type="submit">Submit Feedback</Button>
    </form>
  )
}
