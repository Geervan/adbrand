"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Terminal, TrendingUp, Target, Zap } from "lucide-react"

export function CompactAITerminal() {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const commands = [
    "optimize --campaign=headphones --budget=5000",
    "analyze --competitor=sony --market=audio",
    "generate --copy=lifestyle --audience=millennials",
    "scale --platform=facebook --target-roas=4.2x",
  ]

  const responses = [
    "✅ Campaign optimized • ROAS improved by 127%",
    "📊 Competitor analysis complete • 23 insights found",
    "🎯 High-converting copy generated • CTR: +89%",
    "🚀 Scaling initiated • Budget allocated across 12 audiences",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <section className="py-24 bg-[#0a0f1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Realtime AI Insights</h2>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Track your campaign performance with intelligent analytics and predictive insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Compact Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#111827]/70 backdrop-blur border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10">
              <div className="flex items-center gap-3 px-4 py-3 bg-[#1f2937]/50 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-[#9ca3af] text-xs">
                  <Terminal className="w-3 h-3" />
                  <span>AI Terminal</span>
                </div>
              </div>

              <div className="p-4 font-mono text-sm bg-gradient-to-br from-[#111827]/90 to-[#1f2937]/90 min-h-[200px]">
                <div className="space-y-2">
                  <div className="text-purple-400 text-xs">[SYS] ADmyBRAND AI v2.1.0 Ready</div>

                  <div className="text-white">
                    <span className="text-[#6b7280]">$ </span>
                    <motion.span
                      key={currentCommand}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {commands[currentCommand]}
                    </motion.span>
                    <motion.span animate={{ opacity: showCursor ? 1 : 0 }} className="text-green-400 ml-1">
                      |
                    </motion.span>
                  </div>

                  <motion.div
                    key={`response-${currentCommand}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-green-400 text-xs"
                  >
                    🤖 {responses[currentCommand]}
                  </motion.div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-[#6b7280] flex justify-between">
                  <span>Status: <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block"></span> <span className=" text-green-400">Active</span></span>
                  <span>Campaigns: 1,247</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">$2.4M</h3>
                  <p className="text-[#9ca3af] text-sm">Revenue Generated</p>
                  <p className="text-green-400 text-xs">↗ +127% this month</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">4.2x</h3>
                  <p className="text-[#9ca3af] text-sm">Average ROAS</p>
                  <p className="text-green-400 text-xs">↗ +89% improvement</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8b5cf6] to-[#3b82f6] rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">156K</h3>
                  <p className="text-[#9ca3af] text-sm">Conversions</p>
                  <p className="text-green-400 text-xs">↗ +203% growth</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
