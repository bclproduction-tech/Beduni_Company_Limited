import React from 'react';
import { motion } from 'motion/react';
import { FolderCard } from './FolderCard';
import { Layers } from 'lucide-react';

export function ProductEcosystem() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 bg-clip-text text-transparent mb-6">
            Our Product Ecosystem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Beduni Company Limited is the parent company driving innovation in mathematics education through our flagship products.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <FolderCard
            icon={Layers}
            title="Hesabu Safi"
            description="Our flagship mathematics-focused digital learning platform. Hesabu Safi delivers comprehensive, interactive mathematics education designed specifically for African students and educators. Experience the future of mathematics learning with intelligent assessments, personalized learning paths, and real-time progress tracking."
            delay={0.2}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
              <a href="./Hesabu-Safi/">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-500 dark:to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
  >
    View Product
  </motion.button>
</a>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
