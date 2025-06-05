import { Suspense } from 'react';
import MenuHero from '@/components/menu/menu-hero';
import MenuCategories from '@/components/menu/menu-categories';
import ProductGrid from '@/components/menu/product-grid';
import MenuFilters from '@/components/menu/menu-filters';
import { Skeleton } from '@/components/ui/skeleton';

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <MenuHero />
      
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MenuCategories />
          
          <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
            <MenuFilters />
            
            <div className="mt-6 lg:col-span-3 lg:mt-0">
              <Suspense fallback={<ProductGridSkeleton />}>
                <ProductGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <Skeleton className="h-64 w-full" />
          <div className="p-4">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/4 mb-6" />
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-9 w-20 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}