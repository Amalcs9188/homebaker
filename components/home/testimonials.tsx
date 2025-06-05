"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "Regular Customer",
    content: "The cakes from Sweet Delights are absolutely amazing! I ordered a custom birthday cake and everyone was impressed by both the appearance and taste. Will definitely order again.",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "Event Planner",
    content: "As an event planner, I've worked with many bakeries, but Sweet Delights consistently exceeds expectations. Their attention to detail and reliability make them my go-to for all events.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "Wedding Client",
    content: "Our wedding cake was perfect! The team at Sweet Delights worked closely with us to create exactly what we envisioned. The cake was not only beautiful but delicious too.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      next();
    }, 7000);
    
    return () => clearInterval(timer);
  }, [current, autoplay]);

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Hear from people who have experienced our baked goods
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto" 
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="overflow-hidden px-8 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
                    <Quote className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                
                <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                  "{testimonials[current].content}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <Avatar className="h-16 w-16 border-2 border-amber-200 dark:border-amber-800">
                    <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
                    <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === current
                    ? "bg-amber-600 dark:bg-amber-500"
                    : "bg-gray-300 dark:bg-gray-700 hover:bg-amber-300 dark:hover:bg-amber-800"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}