import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function WhyBeduni() {
  const reasons = [
    {
      title: 'Built for African Education Systems',
      description: 'Our solutions are designed with the unique challenges and opportunities of African education in mind.',
    },
    {
      title: 'Innovation-Driven',
      description: 'We leverage cutting-edge technology to deliver learning experiences that inspire and engage students.',
    },
    {
      title: 'Scalable and Future-Ready',
      description: 'Our platforms grow with your institution, adapting to evolving educational needs and technologies.',
    },
    {
      title: 'User-First Design Philosophy',
      description: 'Every feature is crafted with educators and students in mind, ensuring intuitive and effective tools.',
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 bg-clip-text text-transparent mb-4">
            Why Beduni
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-2xl border border-gray-200/50 dark:border-white/10 p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gold-500 dark:to-yellow-600 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
