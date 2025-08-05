"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 h-full hover:scale-[1.03] transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25"
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#8b5cf6] transition-colors">{title}</h3>

        <p className="text-[#9ca3af] leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  )
}
