"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/cart/cart-provider';
import { cn } from '@/lib/utils';
import CartDrawer from '@/components/cart/cart-drawer';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();
  
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-900/95" 
        : "bg-transparent"
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-x-12"
        >
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-playfair text-2xl font-bold tracking-tight text-amber-700 dark:text-amber-400">
              Home Maker
            </span>
          </Link>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-400",
                    isScrolled ? "text-gray-900 dark:text-gray-100" : "text-gray-800 dark:text-gray-200"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-x-4"
        >
          <Link href="/account">
            <Button variant="ghost" size="icon" className="relative">
              <User className={cn(
                "h-5 w-5 transition-colors",
                isScrolled ? "text-gray-900 dark:text-gray-100" : "text-gray-800 dark:text-gray-200"
              )} />
            </Button>
          </Link>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(true)}>
              <ShoppingBag className={cn(
                "h-5 w-5 transition-colors",
                isScrolled ? "text-gray-900 dark:text-gray-100" : "text-gray-800 dark:text-gray-200"
              )} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-xs text-white"
                >
                  {itemCount}
                </motion.span>
              )}
            </Button>
          </motion.div>
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className={cn(
                "h-6 w-6 transition-colors",
                isScrolled ? "text-gray-900 dark:text-gray-100" : "text-gray-800 dark:text-gray-200"
              )} />
            </Button>
          </div>
        </motion.div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-950"
          >
            <div className="flex items-center justify-between p-4">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-playfair text-2xl font-bold tracking-tight text-amber-700 dark:text-amber-400">
                  Sweet Delights
                </span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="mt-6 flow-root"
            >
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block px-6 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="border-t border-gray-200 dark:border-gray-800 py-6 px-6"
              >
                <Link 
                  href="/account" 
                  className="flex items-center gap-x-2 text-base font-medium text-gray-900 dark:text-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  My Account
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Cart drawer */}
      <CartDrawer open={cartOpen} setOpen={setCartOpen} />
    </header>
  );
}