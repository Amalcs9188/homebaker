"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MenuFilters() {
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [showMobile, setShowMobile] = useState(false);
  
  const categories = [
    { id: "cakes", label: "Cakes" },
    { id: "pastries", label: "Pastries" },
    { id: "breads", label: "Breads" },
    { id: "cookies", label: "Cookies" },
    { id: "cupcakes", label: "Cupcakes" },
    { id: "gift-boxes", label: "Gift Boxes" },
  ];
  
  const dietary = [
    { id: "gluten-free", label: "Gluten Free" },
    { id: "vegan", label: "Vegan" },
    { id: "nut-free", label: "Nut Free" },
    { id: "dairy-free", label: "Dairy Free" },
    { id: "sugar-free", label: "Sugar Free" },
  ];

  return (
    <div>
      <div className="lg:hidden">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setShowMobile(!showMobile)}
        >
          {showMobile ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>
      
      <div className={`${showMobile ? 'block' : 'hidden'} lg:block`}>
        <Accordion type="multiple" defaultValue={["price", "categories", "dietary"]}>
          <AccordionItem value="price" className="border-b">
            <AccordionTrigger className="text-base font-medium">
              Price Range
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-2 pb-6">
                <Slider
                  defaultValue={[0, 50]}
                  min={0}
                  max={100}
                  step={1}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value)}
                  className="mb-6"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ${priceRange[0]}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    ${priceRange[1]}
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="categories" className="border-b">
            <AccordionTrigger className="text-base font-medium">
              Categories
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <Checkbox id={category.id} />
                    <label
                      htmlFor={category.id}
                      className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="dietary" className="border-b">
            <AccordionTrigger className="text-base font-medium">
              Dietary Restrictions
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                {dietary.map((option) => (
                  <div key={option.id} className="flex items-center">
                    <Checkbox id={option.id} />
                    <label
                      htmlFor={option.id}
                      className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mt-6 flex gap-2">
          <Button variant="outline" className="w-1/2">
            Reset
          </Button>
          <Button className="w-1/2 bg-amber-600 hover:bg-amber-700 text-white">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}