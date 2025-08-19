'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X, User, Settings, Bookmark, BarChart3 } from 'lucide-react';
import { useMoodStore } from '../store/moodStore';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { clearMoods } = useMoodStore();

  const handleLogoClick = () => {
    clearMoods();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { name: 'Profile', icon: <User className="w-5 h-5" />, href: '#profile' },
    { name: 'Favorites', icon: <Bookmark className="w-5 h-5" />, href: '#favorites' },
    { name: 'Insights', icon: <BarChart3 className="w-5 h-5" />, href: '#insights' },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, href: '#settings' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">
                  MoodFood
                </h1>
                <p className="text-xs text-neutral-500 -mt-1">
                  Eat what you feel
                </p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors font-medium"
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-neutral-600" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-neutral-100"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
