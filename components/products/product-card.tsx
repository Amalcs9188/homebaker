"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/cart/cart-provider";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all",
        featured ? "col-span-2" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/menu/${product.category}/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          
          {product.new && (
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-amber-600 hover:bg-amber-700 text-white">
                New
              </Badge>
            </div>
          )}
          
          {product.discount > 0 && (
            <div className="absolute top-3 right-3 z-10">
              <Badge className="bg-red-600 hover:bg-red-700 text-white">
                {product.discount}% Off
              </Badge>
            </div>
          )}
          
          <button
            onClick={toggleFavorite}
            className={cn(
              "absolute top-3 right-3 z-10 p-1.5 rounded-full transition-colors",
              isFavorite 
                ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" 
                : "bg-white/80 text-gray-600 dark:bg-gray-800/80 dark:text-gray-400",
              product.discount > 0 ? "right-[70px]" : "right-3"
            )}
          >
            <Heart 
              className={cn(
                "h-5 w-5 transition-colors",
                isFavorite ? "fill-red-600 text-red-600 dark:fill-red-400 dark:text-red-400" : ""
              )} 
            />
          </button>
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/menu/${product.category}/${product.slug}`}>
            <h3 className="font-medium text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-baseline">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ${product.discountPrice.toFixed(2)}
            </span>
            
            {product.discount > 0 && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="bg-amber-600 hover:bg-amber-700 text-white"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
}