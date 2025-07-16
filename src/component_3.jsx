tsx
// src/components/features.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card"

const features = [
  {
    title: "AI-Powered Suggestions",
    description: "Get intelligent code suggestions as you type",
    icon: "✨"
  },
  // Add more features...
]

export function Features() {
  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Powerful Features for Modern Development
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[#0F1112] border-white/10 hover:scale-102 transition-all hover:border-blue-500/50"
            >
              <CardHeader>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}