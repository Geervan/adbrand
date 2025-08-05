"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-32 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#8b5cf6]/10 via-[#3b82f6]/10 to-[#8b5cf6]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="inline-block mb-8"
          >
            <Sparkles className="w-16 h-16 text-[#8b5cf6]" />
          </motion.div>

          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
              Your Marketing?
            </span>
          </h2>

          <p className="text-2xl text-[#9ca3af] mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of marketers who've already revolutionized their campaigns with AI. Start your free trial
            today and see results within 24 hours.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-[#8b5cf6] hover:bg-[#8b5cf6]/80 text-white px-12 py-6 text-xl rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 group"
              >
                Start Free Trial
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>

            <div className="text-center sm:text-left">
              <p className="text-[#9ca3af] text-sm">
                ✨ No credit card required
                <br />🚀 Setup in under 5 minutes
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-[#6b7280] text-lg">Trusted by 10,000+ marketing professionals worldwide</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
