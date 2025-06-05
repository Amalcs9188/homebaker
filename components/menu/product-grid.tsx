"use client";

import { useState } from "react";
import ProductCard from "@/components/products/product-card";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function ProductGrid() {
  const [visibleProducts, setVisibleProducts] = useState(9);
  
  const loadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 6, products.length));
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={loadMore}
            className="bg-amber-600 hover:bg-amber-700 text-white"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}