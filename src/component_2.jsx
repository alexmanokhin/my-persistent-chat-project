tsx
// src/components/hero.tsx
import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-black pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl md:text-7xl font-bold font-rubik bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Code with the Right Vibe
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
          Transform your development workflow with AI-powered code generation that understands context, style, and intent
        </p>
        
        <div className="flex gap-4 mt-8">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#2567FF] to-[#8B5CF6] hover:scale-102 transition-transform"
          >
            Start Coding Free
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-purple-500 hover:bg-purple-500/10"
          >
            Watch Demo
          </Button>
        </div>

        {/* Interactive Demo Preview */}
        <div className="mt-16 w-full max-w-4xl aspect-video rounded-xl bg-[#0F1112] backdrop-blur-sm border border-white/10 p-4">
          {/* Add code editor demo here */}
        </div>
      </div>
    </section>
  )
}