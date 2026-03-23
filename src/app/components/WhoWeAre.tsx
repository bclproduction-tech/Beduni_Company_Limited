import React from 'react';
import { motion } from 'motion/react';
import { FolderCard } from './FolderCard';
import { Building2, Globe, Lightbulb } from 'lucide-react';

export function WhoWeAre() {
  const cards = [
    {
      icon: Building2,
      title: 'Strategic Leadership',
      description: 'Beduni Company Limited is the parent organization, providing strategic direction, governance and innovation across its digital ecosystem.',
    },
    {
      icon: Lightbulb,
      title: 'Technology Excellence',
      description: 'We engineer advanced mathematics solutions that elevate digital learning experiences and deliver measurable academic outcomes.',
    },
    {
      icon: Globe,
      title: 'African Insight',
      description: 'Our solutions are grounded in Kenyan education systems, ensuring relevance, accessibility and meaningful impact across diverse environments.'
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 bg-clip-text text-transparent mb-4">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <FolderCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
