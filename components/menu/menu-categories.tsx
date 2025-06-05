"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cake, Coffee, Cookie, Croissant, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "All", href: "/menu", icon: <Coffee className="h-5 w-5" /> },
  { name: "Cakes", href: "/menu/cakes", icon: <Cake className="h-5 w-5" /> },
  { name: "Pastries", href: "/menu/pastries", icon: <Croissant className="h-5 w-5" /> },
  { name: "Breads", href: "/menu/breads", icon: <Coffee className="h-5 w-5" /> },
  { name: "Cookies", href: "/menu/cookies", icon: <Cookie className="h-5 w-5" /> },
  { name: "Gift Boxes", href: "/menu/gift-boxes", icon: <Gift className="h-5 w-5" /> },
];

export default function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex overflow-x-auto py-4 scrollbar-hide">
      <div className="inline-flex space-x-2 pb-2">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={activeCategory === category.name ? "default" : "outline"}
            className={cn(
              "flex items-center gap-2",
              activeCategory === category.name 
                ? "bg-amber-600 hover:bg-amber-700 text-white" 
                : "text-gray-700 dark:text-gray-300"
            )}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.icon}
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}