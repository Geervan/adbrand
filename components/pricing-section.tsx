"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        "AI Ad Copy Generation",
        "Basic Campaign Management",
        "5 Active Campaigns",
        "Email Support",
        "Basic Analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing marketing teams",
      monthlyPrice: 149,
      yearlyPrice: 119,
      features: [
        "Everything in Starter",
        "Advanced AI Optimization",
        "Unlimited Campaigns",
        "Multi-Platform Management",
        "Priority Support",
        "Advanced Analytics",
        "A/B Testing Suite",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: 399,
      yearlyPrice: 319,
      features: [
        "Everything in Professional",
        "Custom AI Model Training",
        "Dedicated Account Manager",
        "White-label Solution",
        "API Access",
        "Custom Integrations",
        "SLA Guarantee",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Simple Pricing</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core AI features.
          </p>

          <Tabs value={billingPeriod} onValueChange={setBillingPeriod} className="w-fit mx-auto">
            <TabsList className="bg-white/5 border border-white/10">
              <TabsTrigger value="monthly" className="data-[state=active]:bg-[#8b5cf6]">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="yearly" className="data-[state=active]:bg-[#8b5cf6]">
                Yearly
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Save 20%</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? "scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8b5cf6] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 z-10">
                  <Star className="w-4 h-4 " />
                  Most Popular
                </div>
              )}

              <Card
                className={`bg-white/5 backdrop-blur-xl border p-8 h-full transition-all duration-300 hover:scale-103 ${
                  plan.popular
                    ? "border-[#8b5cf6]/50 shadow-2xl shadow-purple-500/20"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-[#9ca3af] mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-[#9ca3af] ml-2">/{billingPeriod === "monthly" ? "month" : "month"}</span>
                    {billingPeriod === "yearly" && (
                      <div className="text-sm text-green-400 mt-1">Billed annually (${plan.yearlyPrice * 12})</div>
                    )}
                  </div>

                  <Button
                    className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#8b5cf6] hover:bg-[#8b5cf6]/80 text-white shadow-lg shadow-purple-500/25"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-[#8b5cf6] flex-shrink-0" />
                      <span className="text-[#9ca3af]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
