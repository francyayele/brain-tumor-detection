import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-50 text-white p-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-6 mb-16">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          About Our Technology
        </h1>
        <p className="text-1xl  text-gray-800 mb-6 text-center">
          Our AI-driven brain tumor detection system uses cutting-edge deep learning models to provide accurate and reliable results for early diagnosis and treatment.
        </p>
      </section>

      {/* Main Content: Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Models Card */}
        <Card className="bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-200">Our Models</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-400 mb-4">
              We use state-of-the-art deep learning models for brain tumor detection:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
              <li>U-Net for image segmentation</li>
              <li>ResNet50 for tumor classification</li>
            </ul>
            <p className="text-gray-300">
              These models have been trained on large datasets of MRI scans and have achieved high accuracy in detecting and classifying brain tumors.
            </p>
          </CardContent>
        </Card>

        {/* Types of Brain Tumors Card */}
        <Card className="bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-200">Types of Brain Tumors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-400 mb-4">
              Our system can detect and classify the following types of brain tumors:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Meningioma</li>
              <li>Glioma</li>
              <li>Pituitary tumor</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Process Section */}
      <section className="mt-16 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">How Our Process Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-200">Step 1: Upload Your MRI</h3>
            <p className="text-gray-300 mt-4">
              Simply upload your MRI scan into our platform to begin the detection process.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-200">Step 2: AI Analysis</h3>
            <p className="text-gray-300 mt-4">
              Our AI models will analyze the image and detect potential brain tumors.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-200">Step 3: Get Your Report</h3>
            <p className="text-gray-300 mt-4">
              Receive a detailed report with tumor detection and classification results.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/upload">
          <Button size="lg" className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 ease-in-out">
            Try It Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
