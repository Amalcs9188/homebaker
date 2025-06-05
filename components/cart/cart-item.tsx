"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "./cart-provider";
import { CartItem as CartItemType } from "@/lib/types";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  
  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="flex gap-4">
      <div className="relative h-20 w-20 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {item.name}
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              ${item.discountPrice.toFixed(2)}
            </p>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            onClick={() => removeFromCart(item.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            ${(item.discountPrice * item.quantity).toFixed(2)}
          </p>
          
          <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none text-gray-600 dark:text-gray-400"
              onClick={decreaseQuantity}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="w-8 text-center text-sm">
              {item.quantity}
            </span>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none text-gray-600 dark:text-gray-400"
              onClick={increaseQuantity}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}