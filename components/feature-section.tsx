"use client"

import { motion } from "framer-motion"
import { FeatureCard } from "@/components/feature-card"
import { Brain, Target, TrendingUp, Zap, Shield, Globe } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Copy Generation",
      description:
        "Generate high-converting ad copy in seconds with our advanced AI models trained on millions of successful campaigns.",
    },
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description:
        "Identify and reach your ideal customers with precision targeting powered by machine learning algorithms.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description:
        "Automatically optimize your campaigns for maximum ROI with real-time performance monitoring and adjustments.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Automation",
      description: "Deploy campaigns across multiple platforms instantly with our automated workflow engine.",
    },
    {
      icon: Shield,
      title: "Brand Safety Guaranteed",
      description:
        "Ensure your brand message stays consistent and safe across all channels with built-in compliance checks.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Expand your reach worldwide with multi-language support and localized campaign optimization.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Powerful Features</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Everything you need to create, optimize, and scale your marketing campaigns with the power of AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
