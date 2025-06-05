"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/product-card";
import { products } from "@/lib/data";

const categories = ["All", "Cakes", "Pastries", "Breads", "Cookies"];

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProducts = activeCategory === "All"
    ? products.slice(0, 8) // Show first 8 products for "All"
    : products.filter(product => 
        product.category === activeCategory.toLowerCase()
      ).slice(0, 8);

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-900 dark:text-white">
              Our Delicious Offerings
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Freshly baked with love and the finest ingredients
            </p>
          </div>
          <Link href="/menu" className="mt-4 sm:mt-0 inline-flex items-center text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400">
            View Full Menu
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="flex overflow-x-auto space-x-2 pb-4 mb-8 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`flex-shrink-0 ${
                activeCategory === category 
                  ? "bg-amber-600 hover:bg-amber-700 text-white" 
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}