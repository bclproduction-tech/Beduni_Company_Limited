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
  
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroimage})`,
        }}
      />


      <div className="absolute inset-0 bg-white/7.5 dark:bg-black/7.5 -z-10" />


      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-80 -z-10">
        <div className="w-full h-full bg-gradient-to-t from-white/90 via-white/50 to-transparent dark:from-black/90 dark:via-black/50" />
      </div>

      
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
      </div>
    </section>
  );
}