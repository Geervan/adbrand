"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play } from "lucide-react"
import { LineChart, BarChart } from "@tremor/react"

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const typingTexts = ["Generate Ad Copy", "Optimize Campaigns", "Boost ROI", "Scale Growth"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Mock data for hero charts
  const heroLineData = [
    { month: "Jan", revenue: 12000, conversions: 450 },
    { month: "Feb", revenue: 18000, conversions: 680 },
    { month: "Mar", revenue: 25000, conversions: 920 },
    { month: "Apr", revenue: 32000, conversions: 1200 },
    { month: "May", revenue: 45000, conversions: 1650 },
    { month: "Jun", revenue: 58000, conversions: 2100 },
  ]

  const heroBarData = [
    { platform: "Google", spend: 15000, roas: 4.2 },
    { platform: "Facebook", spend: 12000, roas: 3.8 },
    { platform: "Instagram", spend: 8000, roas: 5.1 },
    { platform: "LinkedIn", spend: 6000, roas: 3.2 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a] pt-32 md:pt-40">
      {/* Floating Gradient Blob */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#8b5cf6]/30 via-[#3b82f6]/20 to-[#ec4899]/30 rounded-full blur-3xl z-[-1]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -150, 150, 0],
            y: [0, 150, -150, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-gradient-to-l from-[#8b5cf6]/25 via-[#ec4899]/15 to-[#3b82f6]/25 rounded-full blur-3xl z-[-1]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            x: [0, 200, -200, 0],
            y: [0, -200, 200, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#3b82f6]/20 via-[#8b5cf6]/25 to-[#ec4899]/20 rounded-full blur-3xl z-[-1]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight relative z-10">
            ADmyBRAND
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">AI Suite</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-[#9ca3af] mb-4">AI-powered marketing automation that</p>
          <div className="h-8 flex items-center justify-center">
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-[#8b5cf6]"
            >
              {typingTexts[currentText]}
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-[#8b5cf6] hover:bg-[#8b5cf6]/80 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/5 px-8 py-4 text-lg rounded-xl backdrop-blur-sm bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard with Tremor Charts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 relative"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotateX: [0, 5, 0],
              rotateY: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative mx-auto max-w-6xl"
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-500/10">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Revenue Growth Chart */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Revenue Growth</h3>
                      <p className="text-[#9ca3af] text-sm">Monthly performance tracking</p>
                    </div>
                    <div className="h-[200px] bg-gradient-to-br from-[#8b5cf6]/10 to-[#3b82f6]/10 rounded-lg p-4 text-white [&_.tremor-chart_text]:fill-white">
                      <LineChart
                        data={heroLineData}
                        index="month"
                        categories={["revenue"]}
                        colors={["violet"]}
                        valueFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                        showLegend={false}
                        showGridLines={false}
                        className="h-full text-white"
                        curveType="monotone"
                      />
                    </div>
                  </div>

                  {/* Platform Performance Chart */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Platform ROAS</h3>
                      <p className="text-[#9ca3af] text-sm">Return on ad spend by platform</p>
                    </div>
                    <div className="h-[200px] bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/10 rounded-lg p-4 text-white [&_.tremor-chart_text]:fill-white">
                      <BarChart
                        data={heroBarData}
                        index="platform"
                        categories={["roas"]}
                        colors={["violet"]}
                        valueFormatter={(value) => `${value.toFixed(1)}x`}
                        showLegend={false}
                        showGridLines={false}
                        className="h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">$2.4M</div>
                    <div className="text-[#9ca3af] text-sm">Total Revenue</div>
                    <div className="text-green-400 text-xs">↗ +127%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4.2x</div>
                    <div className="text-[#9ca3af] text-sm">Avg ROAS</div>
                    <div className="text-green-400 text-xs">↗ +89%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">8,450</div>
                    <div className="text-[#9ca3af] text-sm">Conversions</div>
                    <div className="text-green-400 text-xs">↗ +203%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
