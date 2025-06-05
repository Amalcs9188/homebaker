"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
    }, 1500);
  };

  return (
    <section className="py-16 bg-amber-600 dark:bg-amber-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-playfair text-white mb-4">
            Join Our Sweet Community
          </h2>
          <p className="text-amber-100 mb-8">
            Subscribe to our newsletter for exclusive offers, new product announcements, and baking tips.
          </p>
          
          {isSubscribed ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Thank You for Subscribing!
              </h3>
              <p className="text-amber-100">
                Check your inbox for a special welcome gift.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 backdrop-blur-sm border-amber-400/30 text-white placeholder:text-amber-100/70 h-12"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-white text-amber-600 hover:bg-amber-100 h-12"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-amber-600\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}