"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Send, Sparkles, Copy, Settings, Zap, Brain } from "lucide-react"

export function PromptPlayground() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [temperature, setTemperature] = useState(0.7)
  const [maxTokens, setMaxTokens] = useState(1000)
  const [activeTab, setActiveTab] = useState("playground")

  const handleSubmit = async () => {
    if (!prompt.trim()) return

    setIsLoading(true)
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          temperature,
          maxTokens,
        }),
      })

      const data = await res.json()
      if (data.error) {
        setResponse(`Error: ${data.error}`)
      } else {
        setResponse(data.response)
      }
    } catch (error) {
      setResponse(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const promptTemplates = [
    {
      title: "Ad Copy Generator",
      prompt:
        "Create compelling ad copy for a [product/service] targeting [audience]. Include a catchy headline, persuasive body text, and a strong call-to-action.",
      category: "Marketing",
    },
    {
      title: "Campaign Strategy",
      prompt:
        "Develop a comprehensive marketing campaign strategy for [brand] launching [product]. Include target audience, key messaging, channels, and success metrics.",
      category: "Strategy",
    },
    {
      title: "Content Ideas",
      prompt:
        "Generate 10 creative content ideas for [brand] on [platform]. Focus on [theme/topic] and ensure they align with [brand voice].",
      category: "Content",
    },
    {
      title: "Email Subject Lines",
      prompt:
        "Write 5 high-converting email subject lines for [campaign type]. Make them attention-grabbing and relevant to [target audience].",
      category: "Email",
    },
  ]

  return (
    <section className="py-24 bg-[#0a0f1a] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Brain className="w-8 h-8 text-[#8b5cf6]" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">AI Playground</h2>
          </div>
          <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
            Test and experiment with our AI models. Create compelling marketing content in real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10">
              <TabsTrigger value="playground" className="data-[state=active]:bg-[#8b5cf6]">
                <Zap className="w-4 h-4 mr-2" />
                Playground
              </TabsTrigger>
              <TabsTrigger value="templates" className="data-[state=active]:bg-[#8b5cf6]">
                <Sparkles className="w-4 h-4 mr-2" />
                Templates
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-[#8b5cf6]">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="playground" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Send className="w-5 h-5 text-[#8b5cf6]" />
                      Your Prompt
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="Enter your marketing prompt here... e.g., 'Create ad copy for wireless headphones targeting fitness enthusiasts'"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[200px] bg-white/5 border-white/10 text-white placeholder:text-[#6b7280] focus:border-[#8b5cf6] resize-none"
                    />
                    <div className="flex gap-3">
                      <Button
                        onClick={handleSubmit}
                        disabled={isLoading || !prompt.trim()}
                        className="bg-[#8b5cf6] hover:bg-[#8b5cf6]/80 text-white flex-1"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Generate
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => copyToClipboard(prompt)}
                        className="border-white/20 text-white hover:bg-white/5"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Output Section */}
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#8b5cf6]" />
                      AI Response
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] bg-black/20 rounded-lg p-4 border border-white/10 overflow-y-auto">
                      <AnimatePresence mode="wait">
                        {isLoading ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center h-full"
                          >
                            <div className="flex items-center gap-3 text-[#9ca3af]">
                              <motion.div
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                                className="flex gap-1"
                              >
                                <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                                <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                                <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                              </motion.div>
                              Generating response...
                            </div>
                          </motion.div>
                        ) : response ? (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="h-full flex flex-col"
                          >
                            <pre className="text-white whitespace-pre-wrap text-sm leading-relaxed font-sans flex-1 mb-4 overflow-y-auto">
                              {response}
                            </pre>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(response)}
                              className="border-white/20 text-white hover:bg-white/5 self-start"
                            >
                              <Copy className="w-3 h-3 mr-2" />
                              Copy Response
                            </Button>
                          </motion.div>
                        ) : (
                          <div className="flex items-center justify-center h-full text-[#6b7280] text-center">
                            <div>
                              <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                              <p>Your AI-generated content will appear here</p>
                            </div>
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="templates" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {promptTemplates.map((template, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#8b5cf6]/30 transition-all duration-300 cursor-pointer h-full"
                      onClick={() => {
                        setPrompt(template.prompt)
                        setActiveTab("playground")
                      }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-white">{template.title}</h3>
                          <Badge variant="secondary" className="bg-[#8b5cf6]/20 text-[#8b5cf6] border-[#8b5cf6]/30">
                            {template.category}
                          </Badge>
                        </div>
                        <p className="text-[#9ca3af] text-sm leading-relaxed">{template.prompt}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-8">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white">AI Model Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="temperature" className="text-white">
                      Temperature: {temperature}
                    </Label>
                    <Input
                      id="temperature"
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={temperature}
                      onChange={(e) => setTemperature(Number.parseFloat(e.target.value))}
                      className="bg-white/5 border-white/10"
                    />
                    <p className="text-[#9ca3af] text-sm">
                      Controls randomness. Lower values = more focused, higher values = more creative.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxTokens" className="text-white">
                      Max Tokens: {maxTokens}
                    </Label>
                    <Input
                      id="maxTokens"
                      type="range"
                      min="100"
                      max="2000"
                      step="100"
                      value={maxTokens}
                      onChange={(e) => setMaxTokens(Number.parseInt(e.target.value))}
                      className="bg-white/5 border-white/10"
                    />
                    <p className="text-[#9ca3af] text-sm">Maximum length of the generated response.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
