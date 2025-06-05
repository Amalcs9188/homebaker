"use client";

import { useCart } from "@/components/cart/cart-provider";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function CartSummary() {
  const { cartItems, subtotal } = useCart();
  
  const deliveryFee = 5.99;
  const taxes = subtotal * 0.08; // 8% tax rate
  const total = subtotal + deliveryFee + taxes;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm sticky top-24">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Order Summary
      </h2>
      
      {cartItems.length > 0 ? (
        <>
          <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  ${(item.discountPrice * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="font-medium text-gray-900 dark:text-white">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
              <span className="font-medium text-gray-900 dark:text-white">
                ${deliveryFee.toFixed(2)}
              </span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Taxes</span>
              <span className="font-medium text-gray-900 dark:text-white">
                ${taxes.toFixed(2)}
              </span>
            </div>
            
            <Separator className="my-2" />
            
            <div className="flex justify-between text-base font-semibold">
              <span className="text-gray-900 dark:text-white">Total</span>
              <span className="text-gray-900 dark:text-white">${total.toFixed(2)}</span>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">
          No items in cart
        </p>
      )}
    </div>
  );
}