import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  message: string;
  image: string;
}

export function TeamMessage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers: TeamMember[] = [
    {
      name: 'Amina Mwangi',
      role: 'Founder & CEO',
      message: 'At Beduni, we believe mathematics is the foundation of innovation. Our mission is to build tools that empower learners across Africa to unlock their full potential through accessible, intelligent digital education.',
      image: 'https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTQ3NDc2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Ochieng',
      role: 'Product Lead',
      message: 'Every feature we design is crafted with African students and educators in mind. We are not just building software - we are creating learning experiences that inspire curiosity, foster understanding, and celebrate achievement.',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk0NzQ3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Grace Kimathi',
      role: 'Education Strategist',
      message: 'Understanding the unique challenges of African classrooms drives everything we do. Our solutions bridge gaps in resources, connectivity, and accessibility - ensuring no learner is left behind in the digital revolution.',
      image: 'https://images.unsplash.com/photo-1670881391783-9c55ba592f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5NTAyNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'James Kariuki',
      role: 'Lead Software Engineer',
      message: 'Technology should serve education, not complicate it. We build scalable, intuitive platforms that work seamlessly across devices and environments, bringing world-class mathematics education to every corner of Africa.',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2OTQ5MzEwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [teamMembers.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 bg-clip-text text-transparent mb-6">
            Message From the Beduni Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-3xl border border-gray-200/50 dark:border-white/10 p-12 shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-32 h-32 rounded-full overflow-hidden mb-8 ring-4 ring-blue-500/20 dark:ring-gold-500/20 shadow-xl"
                >
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Message */}
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl italic">
                  "{teamMembers[currentIndex].message}"
                </p>

                {/* Name & Role */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {teamMembers[currentIndex].name}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-gold-400">
                    {teamMembers[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-16">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-gray-200/50 dark:border-white/10 shadow-xl flex items-center justify-center hover:bg-white/90 dark:hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-gray-200/50 dark:border-white/10 shadow-xl flex items-center justify-center hover:bg-white/90 dark:hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}