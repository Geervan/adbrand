import { AnimatedNavbar } from "@/components/animated-navbar"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { ScrollPinnedSection } from "@/components/scroll-pinned-section"
import { TypingChatBlock } from "@/components/typing-chat-block"
import { CompactAITerminal } from "@/components/compact-ai-terminal"
import { PromptPlayground } from "@/components/prompt-playground"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FAQSection } from "@/components/faq-section"
import { BlogSection } from "@/components/blog-section"
import { CTASection } from "@/components/cta-section"
import { StarfieldBackground } from "@/components/starfield-background"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white overflow-x-hidden">
      <AnimatedNavbar />
      <HeroSection />
      <FeatureSection />
      <ScrollPinnedSection />
      <TypingChatBlock />
      <CompactAITerminal />
      <PromptPlayground />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <BlogSection />
      <CTASection />

      {/* Starfield Background Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0f1a] to-[#050810] overflow-hidden">
        <StarfieldBackground />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Marketing?</h3>
            <p className="text-[#9ca3af] text-lg">
              Join thousands of marketers already using AI to scale their success.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
