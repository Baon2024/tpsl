import PricingCard from "./pricingCard"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Check, X } from "lucide-react"

const plans = [
    {
      name: "Starter",
      monthlyPrice: 15,
      annualPrice: 150,
      features: ["Up to 10,000 data points per month", "Email support", "Community forum access", "Cancel anytime"],
      color: "emerald",
    },
    {
      name: "Pro",
      monthlyPrice: 40,
      annualPrice: 400,
      featured: true,
      features: [
        "Advanced analytics dashboard",
        "Customizable reports and charts",
        "Real-time data tracking",
        "Integration with third-party tools",
        "Everything in Starter Plan",
      ],
      color: "purple",
    },
    {
      name: "Premium",
      monthlyPrice: 120,
      annualPrice: 1200,
      features: [
        "Unlimited data storage",
        "Customizable dashboards",
        "Advanced data segmentation",
        "Real-time data processing",
        "AI-powered insights and recommendations",
        "Everything in Pro Plan",
      ],
      color: "pink",
    },
  ]
  
  const colorClasses = {
    emerald: {
      gradient: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      text: "text-emerald-400",
      button: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    },
    purple: {
      gradient: "bg-gradient-to-br from-purple-400 to-purple-600",
      text: "text-purple-400",
      button: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    pink: {
      gradient: "bg-gradient-to-br from-pink-400 to-pink-600",
      text: "text-pink-400",
      button: "bg-gradient-to-r from-pink-400 to-pink-600",
    },
  }

export default function PricingPage() {
    return (
        
            <div className="p-8 bg-gray-900">
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <PricingCard key={plan.name} plan={plan} colorClasses={colorClasses} />
                ))}
              </div>
            </div>
          )
      
}
