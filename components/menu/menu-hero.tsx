export default function MenuHero() {
  return (
    <div className="relative bg-amber-50 dark:bg-gray-900 py-16 sm:py-24">
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold font-playfair tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Our Menu
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Browse our selection of freshly baked goods made with love and the finest ingredients
        </p>
      </div>
    </div>
  );
}