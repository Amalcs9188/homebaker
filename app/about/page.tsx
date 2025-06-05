import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and mission",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/images/about-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>
      
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/mission.jpg"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            We are dedicated to providing exceptional service and innovative solutions
            to our customers. Our commitment to quality and customer satisfaction
            drives everything we do.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/story.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="text-gray-600 text-lg">
            Founded with a vision to revolutionize the industry, we've grown from
            a small startup to a trusted name in the market. Our journey has been
            marked by continuous innovation and unwavering dedication to our customers.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/quality.jpg"
                alt="Quality"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Quality</h3>
            <p className="text-gray-600">
              We never compromise on quality in any aspect of our service.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/innovation.jpg"
                alt="Innovation"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              We constantly seek new ways to improve and innovate.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/customer.jpg"
                alt="Customer First"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Customer First</h3>
            <p className="text-gray-600">
              Our customers are at the heart of every decision we make.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 