"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/cart-provider";
import CartSummary from "@/components/checkout/cart-summary";
import DeliveryForm from "@/components/checkout/delivery-form";
import PaymentForm from "@/components/checkout/payment-form";
import OrderConfirmation from "@/components/checkout/order-confirmation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = ["delivery", "payment", "confirmation"];

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState("delivery");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  
  const { cartItems, subtotal, clearCart } = useCart();
  const { toast } = useToast();
  
  const handleDeliverySubmit = (data: any) => {
    setDeliveryInfo(data);
    setActiveStep("payment");
  };
  
  const handlePaymentSubmit = () => {
    // In a real app, process payment here
    setTimeout(() => {
      setActiveStep("confirmation");
      setOrderPlaced(true);
      clearCart();
      
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your order. You'll receive a confirmation email shortly.",
      });
    }, 1500);
  };
  
  const currentStepIndex = steps.indexOf(activeStep);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link href="/menu">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Shopping
            </Link>
          </Button>
          <h1 className="text-2xl font-bold font-playfair text-gray-900 dark:text-white">
            Checkout
          </h1>
        </div>
        
        {cartItems.length === 0 && !orderPlaced ? (
          <div className="max-w-2xl mx-auto text-center py-16">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              You don&apos;t have any items in your cart yet.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="/menu">
                Browse Menu
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs value={activeStep} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger 
                    value="delivery"
                    disabled={currentStepIndex > 0 && !orderPlaced}
                    className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                  >
                    Delivery
                  </TabsTrigger>
                  <TabsTrigger 
                    value="payment"
                    disabled={currentStepIndex !== 1 && !orderPlaced}
                    className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                  >
                    Payment
                  </TabsTrigger>
                  <TabsTrigger 
                    value="confirmation"
                    disabled={currentStepIndex !== 2 && !orderPlaced}
                    className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                  >
                    Confirmation
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="delivery" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <DeliveryForm onSubmit={handleDeliverySubmit} />
                </TabsContent>
                
                <TabsContent value="payment" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <PaymentForm onSubmit={handlePaymentSubmit} deliveryInfo={deliveryInfo} />
                </TabsContent>
                
                <TabsContent value="confirmation" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <OrderConfirmation deliveryInfo={deliveryInfo} />
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}