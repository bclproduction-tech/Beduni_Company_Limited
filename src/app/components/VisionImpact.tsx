import React from 'react';
import { motion } from 'motion/react';

export function VisionImpact() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 bg-clip-text text-transparent mb-6">
            Vision & Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-2xl border border-gray-200/50 dark:border-white/10 p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Education Transformation
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We envision a future where every student in Africa has access to world-class mathematics education, powered by intelligent software that adapts to their unique learning journey.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-2xl border border-gray-200/50 dark:border-white/10 p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Digital Inclusion
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                By bridging the digital divide, we're ensuring that geographical and economic barriers don't limit educational opportunities.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-2xl border border-gray-200/50 dark:border-white/10 p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Long-Term African Impact
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Our commitment extends beyond software—we're building a foundation for Africa's digital future, one student at a time.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/30 dark:bg-white/5 rounded-3xl border border-gray-200/50 dark:border-white/10 p-8 shadow-2xl"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1561089489-f13d5e730d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBtYXRoZW1hdGljcyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njk1MDI1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="African Students Learning"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}