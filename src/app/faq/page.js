//import FAQ from "@/components/FAQ"
import FAQ from "../components/faqComponent"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <main className=" w-full mt-3 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQ />
      </main>
    </div>
  )
}

