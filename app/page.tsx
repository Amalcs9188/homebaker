import Hero from '@/components/home/hero';
import FeaturedProducts from '@/components/home/featured-products';
import AboutSection from '@/components/home/about-section';
import Testimonials from '@/components/home/testimonials';
import SpecialOffers from '@/components/home/special-offers';
import OrderProcess from '@/components/home/order-process';
import Newsletter from '@/components/home/newsletter';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <SpecialOffers />
      <OrderProcess />
      <Testimonials />
      <Newsletter />
    </div>
  );
}