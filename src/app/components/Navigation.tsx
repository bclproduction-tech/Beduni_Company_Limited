import React, { useState } from 'react';
import { Moon, Sun, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/app/context/ThemeContext';
import logo from '../../assets/logo.jpeg';

export function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 left-0 right-0 z-50 px-3 sm:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/70 dark:bg-black/70 rounded-2xl border border-gray-200/20 dark:border-white/10 shadow-xl">
          
          {/* MAIN ROW */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-4">

            {/* ✅ GROUPED LOGO (Fixes Flex Distribution) */}
            <div className="flex items-center gap-2 shrink-0">
              <img
                src={logo}
                alt="BCL Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 bg-clip-text text-transparent"
              >
                BCL
              </motion.div>
            </div>

            {/* ✅ CENTERED DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
              
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-gold-400 ${
                  activeSection === 'home'
                    ? 'text-blue-600 dark:text-gold-400'
                    : 'text-gray-700 dark:text-white'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-gold-400 ${
                  activeSection === 'about'
                    ? 'text-blue-600 dark:text-gold-400'
                    : 'text-gray-700 dark:text-white'
                }`}
              >
                About
              </button>

              {/* Products */}
              <div
                className="relative"
                onMouseEnter={() => setProductDropdownOpen(true)}
                onMouseLeave={() => setProductDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-gold-400 ${
                    activeSection === 'products'
                      ? 'text-blue-600 dark:text-gold-400'
                      : 'text-gray-700 dark:text-white'
                  }`}
                >
                  Products
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {productDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 backdrop-blur-xl bg-white/90 dark:bg-black/90 rounded-xl border border-gray-200/20 dark:border-white/10 shadow-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => scrollToSection('products')}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-white/5 transition-colors"
                      >
                        Hesabu Safi
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-gold-400 ${
                  activeSection === 'contact'
                    ? 'text-blue-600 dark:text-gold-400'
                    : 'text-gray-700 dark:text-white'
                }`}
              >
                Contact
              </button>
            </div>

            {/* ✅ RIGHT SIDE */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
              {/* Theme */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-gold-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </motion.button>

              {/* Mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700 dark:text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700 dark:text-white" />
                )}
              </motion.button>

            </div>
          </div>

          {/* MOBILE MENU — unchanged logic */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden md:hidden border-t border-gray-200/20 dark:border-white/10"
              >
                <div className="px-6 py-4 space-y-2">
                  {['home','about','contact'].map(section => (
                    <motion.button
                      key={section}
                      whileHover={{ x: 8 }}
                      onClick={() => scrollToSection(section)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeSection === section
                          ? 'bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-gold-400'
                          : 'text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                      }`}
                    >
                      {section.charAt(0).toUpperCase()+section.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </motion.nav>
  );
}