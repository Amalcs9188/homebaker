import { CheckCircle, Truck, MapPin, Clock } from 'lucide-react';

export default function OrderProcess() {
  const steps = [
    {
      icon: <CheckCircle className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      title: "Choose Your Treats",
      description: "Browse our menu and select your favorite baked goods. Customize cakes and gift boxes to your preferences.",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      title: "Schedule Delivery",
      description: "Select your preferred delivery date and time. Same-day delivery available for orders placed before 10 AM.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      title: "Track Your Order",
      description: "Track your order in real-time to know exactly when your fresh baked goods will arrive at your doorstep.",
    },
    {
      icon: <Truck className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      title: "Enjoy Fresh Delivery",
      description: "Receive your freshly baked goods delivered right to your door. Contactless delivery available upon request.",
    },
  ];

  return (
    <section className="py-16 bg-amber-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Easy ordering and delivery in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="h-0.5 w-8 bg-amber-300 dark:bg-amber-700"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}