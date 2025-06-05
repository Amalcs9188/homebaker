import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Gift } from 'lucide-react';

export default function SpecialOffers() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair text-gray-900 dark:text-white">
            Special Offers
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Limited-time deals and seasonal favorites
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seasonal Special */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-64">
              <Image
                src="https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Strawberry Cream Cake"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-amber-600 hover:bg-amber-700 text-white">
                  Limited Time
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Strawberry Dream Cake
                </h3>
                <div className="flex items-center text-amber-600 dark:text-amber-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Seasonal</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our special summer cake made with fresh strawberries, light vanilla sponge, and whipped cream frosting. Perfect for any summer celebration!
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">$32.99</span>
                  <span className="text-sm line-through text-gray-500 ml-2">$39.99</span>
                </div>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/menu/cakes/strawberry-dream">
                    Order Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Gift Box */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-64">
              <Image
                src="https://images.pexels.com/photos/3992132/pexels-photo-3992132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bakery Gift Box"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-purple-600 hover:bg-purple-700 text-white">
                  Best Seller
                </Badge>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Deluxe Pastry Gift Box
                </h3>
                <div className="flex items-center text-purple-600 dark:text-purple-400">
                  <Gift className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Perfect Gift</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A carefully curated selection of our finest pastries, cookies, and mini cakes. Makes a perfect gift for birthdays, anniversaries, or any special occasion.
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">$49.99</span>
                  <span className="text-sm line-through text-gray-500 ml-2">$59.99</span>
                </div>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/menu/gift-boxes/deluxe-pastry">
                    Order Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}