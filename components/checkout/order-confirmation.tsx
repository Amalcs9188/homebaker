"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";

interface OrderConfirmationProps {
  deliveryInfo: any;
}

export default function OrderConfirmation({ deliveryInfo }: OrderConfirmationProps) {
  const [orderNumber, setOrderNumber] = useState("");
  const [estimatedDelivery, setEstimatedDelivery] = useState("");
  const { cartItems } = useCart();
  
  useEffect(() => {
    // Generate random order number
    setOrderNumber(`BD-${Math.floor(100000 + Math.random() * 900000)}`);
    
    // Set estimated delivery time (current time + 45-60 minutes)
    const now = new Date();
    const deliveryTime = new Date(now.getTime() + (45 + Math.floor(Math.random() * 15)) * 60000);
    setEstimatedDelivery(deliveryTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }, []);

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-6"
      >
        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
          <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
        </div>
      </motion.div>
      
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Thank You for Your Order!
      </h2>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Your order has been placed successfully. We've sent a confirmation email to {deliveryInfo.email}.
      </p>
      
      <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg mb-8 max-w-md mx-auto">
        <div className="flex justify-between mb-4">
          <span className="text-gray-600 dark:text-gray-400">Order Number:</span>
          <span className="font-semibold text-gray-900 dark:text-white">{orderNumber}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
          <div className="text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">Delivery Address:</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {deliveryInfo.address}, {deliveryInfo.city}, {deliveryInfo.state} {deliveryInfo.zipCode}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
          <div className="text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">Estimated Delivery:</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Today, by {estimatedDelivery}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 space-y-4">
        <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
          <Link href="/tracking">
            Track Order
            <MapPin className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        
        <Button asChild variant="outline">
          <Link href="/">
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}