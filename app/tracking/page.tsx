"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MapPin, Clock, CheckCircle, AlarmClock, Truck, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically load the map component with no SSR
const OrderMap = dynamic(() => import('@/components/tracking/order-map'), {
  ssr: false,
  loading: () => <div className="h-80 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-md"></div>
});

const deliverySteps = [
  { id: 'ordered', title: 'Order Received', icon: <CheckCircle />, completed: true },
  { id: 'preparing', title: 'Preparing Order', icon: <Clock />, completed: true },
  { id: 'ready', title: 'Ready for Delivery', icon: <AlarmClock />, completed: true },
  { id: 'delivering', title: 'Out for Delivery', icon: <Truck />, completed: true },
  { id: 'delivered', title: 'Delivered', icon: <MapPin />, completed: false },
];

export default function TrackingPage() {
  const [orderNumber, setOrderNumber] = useState('BD-123456');
  const [activeTab, setActiveTab] = useState('map');
  const [currentStep, setCurrentStep] = useState(3); // 0-indexed, 3 means "Out for Delivery"
  const [estimatedDelivery, setEstimatedDelivery] = useState('');
  const [driverLocation, setDriverLocation] = useState({ lat: 40.7128, lng: -74.006 }); // NYC default
  const [customerLocation, setCustomerLocation] = useState({ lat: 40.7200, lng: -73.9950 });

  useEffect(() => {
    // Set estimated delivery time (current time + 15-20 minutes)
    const now = new Date();
    const deliveryTime = new Date(now.getTime() + (15 + Math.floor(Math.random() * 5)) * 60000);
    setEstimatedDelivery(deliveryTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    // Simulate driver movement
    const interval = setInterval(() => {
      setDriverLocation(prevLocation => ({
        lat: prevLocation.lat + (Math.random() * 0.0008 - 0.0004),
        lng: prevLocation.lng + (Math.random() * 0.0008 - 0.0004),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold font-playfair text-gray-900 dark:text-white mb-6">
            Track Your Order
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Order Number
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {orderNumber}
                  </p>
                </div>
                
                <div className="mt-4 sm:mt-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Estimated Delivery
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Today, by {estimatedDelivery}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-4 left-0 w-full">
                  <div className="h-1 bg-gray-200 dark:bg-gray-700">
                    <div 
                      className="h-1 bg-amber-600 dark:bg-amber-500 transition-all duration-500"
                      style={{ width: `${(currentStep + 1) * 25}%` }}
                    ></div>
                  </div>
                </div>

                <ol className="grid grid-cols-1 sm:grid-cols-5 relative">
                  {deliverySteps.map((step, index) => (
                    <li key={step.id} className="flex flex-col items-center pt-10 pb-4">
                      <div className={`
                        flex items-center justify-center w-10 h-10 rounded-full z-10
                        ${index <= currentStep 
                          ? 'bg-amber-600 dark:bg-amber-500 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500'}
                      `}>
                        {step.icon}
                      </div>
                      <p className="mt-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-white text-center">
                        {step.title}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden mb-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="px-6 pt-6">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger 
                    value="map"
                    className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                  >
                    <MapPin className="h-4 w-4 mr-2" /> Live Tracking
                  </TabsTrigger>
                  <TabsTrigger 
                    value="details"
                    className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                  >
                    <Truck className="h-4 w-4 mr-2" /> Order Details
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="map" className="p-6 pt-4">
                <OrderMap 
                  driverLocation={driverLocation}
                  customerLocation={customerLocation}
                />
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-amber-600 text-white rounded-full p-2 mr-4">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        John D. is on the way
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Estimated arrival: {estimatedDelivery}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="details" className="p-6 pt-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Delivery Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      John Doe<br />
                      123 Main St<br />
                      New York, NY 10001
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Order Summary
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">1x Chocolate Cake</span>
                        <span className="text-gray-900 dark:text-white">$32.99</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">2x Croissants</span>
                        <span className="text-gray-900 dark:text-white">$9.98</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">1x Sourdough Bread</span>
                        <span className="text-gray-900 dark:text-white">$7.99</span>
                      </li>
                      <li className="pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between font-medium">
                        <span className="text-gray-900 dark:text-white">Total</span>
                        <span className="text-gray-900 dark:text-white">$50.96</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                    <AlertTitle className="text-blue-800 dark:text-blue-300 flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      Special Instructions
                    </AlertTitle>
                    <AlertDescription className="text-blue-700 dark:text-blue-400">
                      Please leave the order at the front door. Thank you!
                    </AlertDescription>
                  </Alert>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Need help with your order?
            </p>
            <Button variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}