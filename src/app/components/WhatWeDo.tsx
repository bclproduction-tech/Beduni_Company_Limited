import React from 'react';
import { motion } from 'motion/react';
import { FolderCard } from './FolderCard';
import { Calculator, Code, GraduationCap, TrendingUp } from 'lucide-react';

export function WhatWeDo() {
  const services = [
    {
      icon: Calculator,
      title: 'Digital Mathematics Platforms',
      description: 'Interactive and engaging mathematics learning platforms that make complex concepts accessible and enjoyable for students.',
    },
    {
      icon: Code,
      title: 'Educational Software Development',
      description: 'Custom-built software solutions tailored to meet the unique needs of educational institutions across Africa.',
    },
    {
      icon: GraduationCap,
      title: 'Learning System Digitization',
      description: 'Comprehensive digitization services that transform traditional learning systems into modern, efficient digital ecosystems.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable EdTech Solutions',
      description: 'Future-ready educational technology solutions designed to scale with your institution and adapt to evolving needs.',
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
