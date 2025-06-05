import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>
      
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/contact-office.jpg"
              alt="Our Office"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/contact-map.jpg"
              alt="Location Map"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-semibold">Contact Information</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Address</h3>
              <p className="text-gray-600">
                123 Business Street<br />
                City, State 12345<br />
                United States
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Email</h3>
              <p className="text-gray-600">contact@example.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 