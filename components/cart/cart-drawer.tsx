"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, AlertCircle, ArrowRight } from "lucide-react";
import { useCart } from "./cart-provider";
import CartItem from "./cart-item";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface CartDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function CartDrawer({ open, setOpen }: CartDrawerProps) {
  const { cartItems, subtotal } = useCart();
  const { toast } = useToast();
  
  const deliveryFee = 5.99;
  const total = subtotal + (subtotal > 0 ? deliveryFee : 0);
  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        variant: "destructive",
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
      });
      return;
    }
    
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-6 scrollbar-hide">
          <AnimatePresence>
            {cartItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center h-full text-center px-4"
              >
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-6 mb-4">
                  <ShoppingBag className="h-10 w-10 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Browse our delicious bakery items and add something to your cart.
                </p>
                <Button asChild onClick={() => setOpen(false)}>
                  <Link href="/menu">
                    Browse Menu
                  </Link>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CartItem item={item} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {cartItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Separator className="my-4" />
            
            <div className="space-y-4 pb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  ${deliveryFee.toFixed(2)}
                </span>
              </div>
              
              <div className="flex justify-between text-base font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                <AlertCircle className="h-3.5 w-3.5 mr-1" />
                Taxes will be calculated at checkout
              </div>
            </div>
            
            <SheetFooter className="flex flex-col gap-4 sm:gap-4">
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={handleCheckout}
              >
                Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
              </Button>
            </SheetFooter>
          </motion.div>
        )}
      </SheetContent>
    </Sheet>
  );
}