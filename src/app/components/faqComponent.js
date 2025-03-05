"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "What is findPrivateSchoolScholarshipsBursaries?",
    answer:
      "findPrivateSchoolScholarshipsBursaries is a directory of private/public schools in the United Kingdom, providing information on the scholarships, bursaries and other forms of fee-support available, in order to provide parents with the knowledge needed to help their children access independent schooling.",
  },
  {
    question: "How does it work?",
    answer:
      "Browse our directory of schools to compare the details of each school, by the availability of scholarships, bursaries and other forms of fee-assistance, with the wider school details available.",
  },
  {
    question: "Can I directly compare schools?",
    answer:
      "Yes, you can directly compare schools by ticking them in the directory, and clicking the 'compare Schools' button. This allows you to directly compare your selected schools side-by-side.",
  },
  {
    question: "What's the difference between free and subscribed?",
    answer:
      "Access to the schools directory is divided into three tiers: without signing in, you have access to up to 10 schools. If you sign-up, you can view, save and compare up to 25. If you subscribe, your access is unlimited.",
  },
  {
    question: "How much does a subscription cost?",
    answer: 
    "A subscription costs £9.99 per month."
  }

]

export default function FAQ() {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (value) => {
    setOpenItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 mt-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger onClick={() => toggleItem(`item-${index}`)}>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}