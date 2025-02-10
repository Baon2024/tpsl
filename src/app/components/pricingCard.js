"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
//import { PaymentModal } from "./payment-modal"





  export default function PricingCard ({ plan, colorClasses }) {
    return (
      <div className={`relative p-1 rounded-lg ${plan.featured ? colorClasses[plan.color].gradient : "bg-gray-800"}`}>
        <div className="p-6 bg-gray-900 rounded-lg h-full">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
            <div className="mt-2">
              <span className={`text-4xl font-bold ${colorClasses[plan.color].text}`}>€{plan.monthlyPrice}</span>
              <span className="text-gray-400">/month</span>
            </div>
          </div>
          <Button className={`w-full ${colorClasses[plan.color].button} hover:opacity-90`}>Choose Plan</Button>
          <ul className="mt-6 space-y-4">
            {plan?.features?.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className={`h-5 w-5 ${colorClasses[plan.color].text} shrink-0`} />
                <span className="ml-3 text-sm text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
}
