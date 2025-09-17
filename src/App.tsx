import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Hello World! 👋</CardTitle>
          <CardDescription>
            Welcome to your Vite + React + shadcn/ui application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              This is a minimal hello world app built with:
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">⚡ Vite</span>
              <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-md">⚛️ React</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md">🎨 shadcn/ui</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">🎯 TypeScript</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Button 
              onClick={() => setCount(count + 1)}
              className="w-full"
            >
              Click me! Count: {count}
            </Button>
            <Button variant="outline" className="w-full">
              <Heart className="mr-2 h-4 w-4" />
              Made with love
            </Button>
          </div>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-xs text-muted-foreground w-full">
            Ready for static deployment! 🚀
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
