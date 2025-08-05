"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { LineChart, DonutChart } from "@tremor/react"

export function ScrollPinnedSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const features = [
    {
      title: "AI Content Generation",
      description:
        "Our advanced AI analyzes your brand voice and generates compelling ad copy that converts. From headlines to full campaigns, create content that resonates with your audience in seconds.",
      highlight: "10x faster content creation",
    },
    {
      title: "Multi-Platform Management",
      description:
        "Manage all your advertising platforms from one unified dashboard. Deploy campaigns across Google, Facebook, Instagram, LinkedIn, and more with a single click.",
      highlight: "Save 15+ hours per week",
    },
    {
      title: "Advanced Analytics",
      description:
        "Get deep insights into campaign performance with AI-powered analytics. Understand what works, what doesn't, and get actionable recommendations for improvement.",
      highlight: "Data-driven decisions",
    },
  ]

  // Line chart data
  const lineData = [
    { name: "Jan", value: 400, conversions: 120 },
    { name: "Feb", value: 600, conversions: 180 },
    { name: "Mar", value: 800, conversions: 240 },
    { name: "Apr", value: 1200, conversions: 360 },
    { name: "May", value: 1600, conversions: 480 },
    { name: "Jun", value: 2400, conversions: 720 },
  ]

  // Donut chart data for better visibility
  const donutData = [
    { name: "Google Ads", value: 35 },
    { name: "Facebook", value: 28 },
    { name: "Instagram", value: 20 },
    { name: "LinkedIn", value: 17 },
  ]

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const section = Math.floor(progress * features.length)
      setActiveSection(Math.min(section, features.length - 1))
    })
    return unsubscribe
  }, [scrollYProgress, features.length])

  return (
    <section ref={containerRef} className="relative bg-[#0a0f1a]">
      <div className="sticky top-0 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Sticky mockup with charts */}
            <motion.div
              className="relative"
              style={{
                scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.1]),
              }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-purple-500/10">
                {/* Line Chart */}
                <div className="bg-gradient-to-br from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-2xl p-6 mb-6 [&_.tremor-chart_text]:fill-white">
                  <h3 className="text-xl font-bold text-white mb-4">Campaign Performance</h3>
                  <div className="h-48 text-xs text-white">
                    <LineChart
                      data={lineData}
                      index="name"
                      categories={["value"]}
                      colors={["violet"]}
                      valueFormatter={(value) => `$${value}K`}
                      showLegend={false}
                      showGridLines={false}
                      className="h-full"
                      curveType="monotone"
                    />
                  </div>
                </div>

                {/* Donut Chart - Better visibility than pie chart */}
                <div className="bg-gradient-to-br from-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Platform Distribution</h3>
                  <div className="flex items-center justify-between">
                    <div className="w-40 h-40">
                      <DonutChart
                        data={donutData}
                        category="value"
                        index="name"
                        colors={["violet", "blue", "pink", "emerald"]}
                        showLabel={false}
                        showTooltip={true}
                        className="h-full [&_text]:fill-white"
                      />
                    </div>
                    <div className="space-y-3">
                      {donutData.map((entry, index) => {
                        const colors = ["#8b5cf6", "#3b82f6", "#ec4899", "#10b981"]
                        return (
                          <div key={index} className="flex items-center gap-3 text-sm">
                            <div
                              className="w-4 h-4 rounded-full border-2 border-white/20"
                              style={{ backgroundColor: colors[index] }}
                            ></div>
                            <div>
                              <div className="text-white font-medium">{entry.name}</div>
                              <div className="text-[#9ca3af] text-xs">{entry.value}%</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Horizontal cards */}
            <div className="space-y-8">
              {/* Horizontal Cards Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.slice(0, 2).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`transition-all duration-500 ${activeSection === index ? "opacity-100" : "opacity-70"}`}
                  >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full hover:scale-[1.02] transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-[#9ca3af] text-sm leading-relaxed mb-3">{feature.description}</p>
                      <div className="inline-block bg-[#8b5cf6]/20 text-[#8b5cf6] px-3 py-1 rounded-full text-xs font-semibold">
                        {feature.highlight}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Third Feature Card - Full Width */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`transition-all duration-500 ${activeSection === 2 ? "opacity-100" : "opacity-70"}`}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{features[2].title}</h3>
                  <p className="text-[#9ca3af] leading-relaxed mb-4">{features[2].description}</p>
                  <div className="inline-block bg-[#8b5cf6]/20 text-[#8b5cf6] px-4 py-2 rounded-full text-sm font-semibold">
                    {features[2].highlight}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
