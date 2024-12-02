import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ResultsPage() {
  // This is a placeholder. In a real application, you'd fetch the results from your backend.
  const results = {
    classification: 'Meningioma',
    confidence: 0.92,
    segmentedImageUrl: '/placeholder.svg',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Analysis Results</h1>
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Classification</h2>
            <p className="text-xl">{results.classification}</p>
            <p className="text-sm text-gray-400">Confidence: {(results.confidence * 100).toFixed(2)}%</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Segmented Image</h2>
            <img src={results.segmentedImageUrl} alt="Segmented MRI" className="w-full rounded-lg" />
          </div>
          <div className="flex justify-between">
            <Link href="/upload">
              <Button variant="outline">Upload Another</Button>
            </Link>
            <Button>Download Report</Button>
          </div>
        </div>
      </main>
    </div>
  )
}

