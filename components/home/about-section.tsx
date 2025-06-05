import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 bg-amber-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
            <Image 
              src="https://images.pexels.com/photos/2267871/pexels-photo-2267871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Bakery chef preparing bread"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold font-playfair text-gray-900 dark:text-white mb-6">
              Our Baking Story
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                At Sweet Delights, we believe that the best baked goods are made with the finest ingredients, time-honored techniques, and a whole lot of love.
              </p>
              <p>
                Founded in 2010 by Master Baker Emily Johnson, our bakery began as a small neighborhood shop dedicated to bringing traditional European baking methods to our local community.
              </p>
              <p>
                Today, we remain committed to those same principles – creating handcrafted, small-batch baked goods that bring joy to your everyday moments and special occasions alike.
              </p>
              <p>
                Every product in our bakery is made from scratch daily, using locally sourced ingredients whenever possible. We never use artificial preservatives, flavors, or colors.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}