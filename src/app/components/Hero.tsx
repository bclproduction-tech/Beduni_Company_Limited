import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroimage from '../../assets/hero.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 dark:from-black dark:via-gray-900 dark:to-black -z-10" />
      
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-gold-400 dark:via-yellow-500 dark:to-gold-400 bg-clip-text text-transparent leading-tight">
            Forward Ever, Mbele Daima
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto"
        >
          Beduni Company Limited builds intelligent mathematics software solutions designed to modernize learning systems across Kenya and Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('products')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-500 dark:to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            Explore Our Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white rounded-full hover:bg-white/90 dark:hover:bg-white/20 transition-all shadow-lg"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="backdrop-blur-xl bg-white/30 dark:bg-white/5 rounded-3xl border border-gray-200/50 dark:border-white/10 p-8 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden">
              <img
                src={heroimage}
                alt="Education Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}