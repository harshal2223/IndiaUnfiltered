import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-white mb-4 font-playfair">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center space-x-2 bg-[#1DE9B6] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#1DE9B6]/90 transition-colors duration-200"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          <Link 
            href="/fact-check"
            className="inline-flex items-center justify-center space-x-2 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            <span>Try Fact Check</span>
          </Link>
        </div>
      </div>
    </div>
  )
}