tsx
// src/components/navigation.tsx
import { Button } from "./ui/button"

export function Navigation() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-lg bg-black/50 z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Hi Vibe" className="h-8 w-auto" />
          <span className="font-bold text-xl">Hi Vibe</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-blue-400 transition-colors">Documentation</a>
        </div>

        <Button 
          className="bg-gradient-to-r from-[#2567FF] to-[#8B5CF6] hover:scale-102 transition-transform"
        >
          Get Started
        </Button>
      </nav>
    </header>
  )
}