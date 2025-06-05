import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-50 dark:bg-gray-900 border-t border-amber-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-playfair text-2xl font-bold tracking-tight text-amber-700 dark:text-amber-400">
                Sweet Delights
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Crafting delicious memories with every bite since 2010.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-amber-600 dark:hover:text-amber-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-600 dark:hover:text-amber-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-600 dark:hover:text-amber-400">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
              Menu
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/menu/cakes" className="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                  Cakes
                </Link>
              </li>
              <li>
                <Link href="/menu/pastries" className="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                  Pastries
                </Link>
              </li>
              <li>
                <Link href="/menu/breads" className="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                  Breads
                </Link>
              </li>
              <li>
                <Link href="/menu/cookies" className="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
              Contact
            </h3>
            <address className="mt-4 not-italic text-gray-600 dark:text-gray-400">
              <p>123 Bakery Street</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">
                <a href="tel:+1234567890" className="hover:text-amber-600 dark:hover:text-amber-400">
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <a href="mailto:hello@sweetdelights.com" className="hover:text-amber-600 dark:hover:text-amber-400">
                  hello@sweetdelights.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-amber-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Sweet Delights Bakery. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
              Terms
            </Link>
            <Link href="/sitemap" className="text-sm text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}