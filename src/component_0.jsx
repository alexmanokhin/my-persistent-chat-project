tsx
// src/App.tsx
import { ThemeProvider } from './components/theme-provider'
import { Navigation } from './components/navigation'
import { Hero } from './components/hero'
import { SocialProof } from './components/social-proof'
import { Features } from './components/features'
import { InteractiveDemo } from './components/interactive-demo'
import { HowItWorks } from './components/how-it-works'
import { Integrations } from './components/integrations'
import { Pricing } from './components/pricing'
import { Testimonials } from './components/testimonials'
import { ApiSection } from './components/api-section'
import { Faq } from './components/faq'
import { CtaSection } from './components/cta-section'
import { Footer } from './components/footer'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-black text-white antialiased">
        <Navigation />
        <main>
          <Hero />
          <SocialProof />
          <Features />
          <InteractiveDemo />
          <HowItWorks />
          <Integrations />
          <Pricing />
          <Testimonials />
          <ApiSection />
          <Faq />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}