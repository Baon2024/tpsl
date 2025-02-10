"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Check, X } from "lucide-react"

// Reusable components and data
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

function PricingCard({ name, price, period, features, featured, color }) {
  return (
    (<div
      className={`relative p-6 rounded-lg border ${featured ? "border-blue-500 shadow-lg" : "border-gray-200"}`}>
      {featured && (
        <div
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <div className="mt-2">
          <span className="text-4xl font-bold text-gray-900">€{price}</span>
          <span className="text-gray-500">/{period}</span>
        </div>
      </div>
      <Button
        className={`w-full ${featured ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"}`}>
        Get Started
      </Button>
      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 shrink-0" />
            <span className="ml-3 text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>)
  );
}

// Individual design components
function Design1() {
  return (
    (<div className="p-8">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} price={plan.monthlyPrice} period="month" />
        ))}
      </div>
    </div>)
  );
}

function Design2() {
  return (
    (<div className="p-8 bg-gray-900">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-1 rounded-lg ${plan.featured ? "bg-gradient-to-br from-${plan.color}-400 to-${plan.color}-600" : "bg-gray-800"}`}>
            <div className="p-6 bg-gray-900 rounded-lg h-full">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-2">
                  <span className={`text-4xl font-bold text-${plan.color}-400`}>€{plan.monthlyPrice}</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              <Button
                className={`w-full bg-gradient-to-r from-${plan.color}-400 to-${plan.color}-600 hover:opacity-90`}>
                Choose Plan
              </Button>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className={`h-5 w-5 text-${plan.color}-400 shrink-0`} />
                    <span className="ml-3 text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>)
  );
}

function Design3() {
  return (
    (<div className="p-8 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Features</th>
            {plans.map((plan) => (
              <th key={plan.name} className="py-3 px-4 text-center">
                <div
                  className={`text-lg font-bold ${plan.featured ? "text-blue-600" : "text-gray-900"}`}>
                  {plan.name}
                </div>
                <div className="mt-1 text-2xl font-bold text-gray-900">
                  €{plan.monthlyPrice}
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <Button
                  className={`mt-2 ${plan.featured ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900"}`}>
                  Choose Plan
                </Button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {plans[0].features.map((feature, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-3 px-4 text-left text-sm font-medium text-gray-900">{feature}</td>
              {plans.map((plan) => (
                <td key={plan.name} className="py-3 px-4 text-center">
                  {plan.features.includes(feature) ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>)
  );
}

function Design4() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    (<div className="p-8">
      <div className="flex justify-center items-center mb-8">
        <span
          className={`mr-2 ${isAnnual ? "text-gray-500" : "text-gray-900 font-semibold"}`}>Monthly</span>
        <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
        <span
          className={`ml-2 ${isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"}`}>Annual</span>
      </div>
      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">All Plans</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                {...plan}
                price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
                period={isAnnual ? "year" : "month"} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="business">
          <div className="text-center text-gray-600">
            Contact our sales team for custom business plans tailored to your needs.
          </div>
        </TabsContent>
        <TabsContent value="enterprise">
          <div className="text-center text-gray-600">
            For enterprise solutions, please schedule a consultation with our experts.
          </div>
        </TabsContent>
      </Tabs>
    </div>)
  );
}

function Design5() {
  const [dataPoints, setDataPoints] = useState(10000)

  const calculatePrice = (points) => {
    if (points <= 10000) return 15
    if (points <= 50000) return 40
    if (points <= 100000) return 80
    return 120
  }

  const price = calculatePrice(dataPoints)

  return (
    (<div className="p-8">
      <div className="mb-8">
        <label
          htmlFor="data-points"
          className="block text-sm font-medium text-gray-700 mb-2">
          Monthly Data Points: {dataPoints.toLocaleString()}
        </label>
        <Slider
          id="data-points"
          min={1000}
          max={200000}
          step={1000}
          value={[dataPoints]}
          onValueChange={(value) => setDataPoints(value[0])} />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Custom Plan</h3>
          <div className="text-4xl font-bold text-gray-900 mb-2">
            €{price}
            <span className="text-xl text-gray-500">/month</span>
          </div>
          <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Included Features</h3>
          <ul className="space-y-2">
            {plans[0].features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>)
  );
}

// Main component with design toggle
export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentDesign, setCurrentDesign] = useState("1")

  const designs = {
    "1": { component: Design1, title: "Modern and Minimalist" },
    "2": { component: Design2, title: "Dark Mode with Accent Colors" },
    "3": { component: Design3, title: "Horizontal Layout with Feature Comparison" },
    "4": { component: Design4, title: "Tabbed Interface with Monthly/Annual Toggle" },
    "5": { component: Design5, title: "Interactive Slider for Custom Plans" },
  }

  const SelectedDesign = designs[currentDesign].component

  return (
    (<div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Button onClick={() => setIsModalOpen(true)} className="mb-4">
        Open Pricing Modal
      </Button>
      <Select value={currentDesign} onValueChange={setCurrentDesign}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a design" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(designs).map(([key, { title }]) => (
            <SelectItem key={key} value={key}>
              Design {key}: {title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[900px] bg-white p-0 overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h2 className="text-3xl font-bold mb-2">Pricing Plans</h2>
            <p>
              Design {currentDesign}: {designs[currentDesign].title}
            </p>
          </div>
          <SelectedDesign />
        </DialogContent>
      </Dialog>
    </div>)
  );
}

