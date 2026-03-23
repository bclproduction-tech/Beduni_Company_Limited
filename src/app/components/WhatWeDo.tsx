import React from 'react';
import { motion } from 'motion/react';
import { FolderCard } from './FolderCard';
import { Calculator, Code, GraduationCap, TrendingUp } from 'lucide-react';

export function WhatWeDo() {
  const services = [
    {
      icon: Calculator,
      title: 'Digital Learning Platforms',
      description: 'We build interactive mathematics platforms that simplify complex concepts while enhancing student engagement and overall academic performance.',
    },
    {
      icon: Code,
      title: 'Custom Software Solutions',
      description: 'We develop tailored education software designed to address institutional needs, improve efficiency and support effective learning delivery.',
    },
    {
      icon: GraduationCap,
      title: 'Education System Transformation',
      description: 'We modernize traditional learning environments through comprehensive digitization, enabling efficient, scalable and technology-driven education systems.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Technology Infrastructure',
      description: 'Our solutions are built to scale seamlessly, supporting institutional growth while adapting to evolving educational and technological demands.'
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 bg-clip-text text-transparent mb-4">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FolderCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
