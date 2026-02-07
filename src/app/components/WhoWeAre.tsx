import React from 'react';
import { motion } from 'motion/react';
import { FolderCard } from './FolderCard';
import { Building2, Globe, Lightbulb } from 'lucide-react';

export function WhoWeAre() {
  const cards = [
    {
      icon: Building2,
      title: 'Parent Company',
      description: 'Beduni Company Limited serves as the parent organization, fostering innovation and excellence in educational technology solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Education Technology',
      description: 'We specialize in developing cutting-edge mathematics software that transforms how students learn and engage with digital platforms.',
    },
    {
      icon: Globe,
      title: 'African Roots',
      description: 'Our solutions are designed with African educational needs at the core, ensuring relevance and effectiveness across diverse learning environments.',
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
