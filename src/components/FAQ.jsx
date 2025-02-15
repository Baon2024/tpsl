"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
  },
  {
    question: "How do I start a Next.js project?",
    answer:
      "To start a new Next.js project, you can use the create-next-app command. Run 'npx create-next-app@latest' in your terminal and follow the prompts to set up your new project.",
  },
  {
    question: "What is server-side rendering in Next.js?",
    answer:
      "Server-side rendering (SSR) is a feature in Next.js that allows you to pre-render pages on the server. This can improve performance and SEO by sending fully rendered HTML to the client.",
  },
  {
    question: "Can I use CSS modules with Next.js?",
    answer:
      "Yes, Next.js has built-in support for CSS Modules. You can create CSS files with the .module.css extension and import them in your components to use scoped CSS classes.",
  },
  {
    question: "How does routing work in Next.js?",
    answer:
      "Next.js uses a file-system based router. You can create routes by adding files to the app directory. For example, app/about/page.js would create a route at /about.",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (value) => {
    setOpenItems(
      (prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value])
    )
  }

  return (
    (<div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger onClick={() => toggleItem(`item-${index}`)}>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>)
  );
}

