import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FolderCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  onClick?: () => void;
}

export function FolderCard({ icon: Icon, title, description, delay = 0, onClick }: FolderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      onClick={onClick}
      className={`relative group ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Folder Tab */}
      <div className="absolute -top-3 left-6 w-24 h-6 backdrop-blur-xl bg-blue-500/20 dark:bg-gold-500/20 rounded-t-lg border-t border-l border-r border-blue-300/30 dark:border-gold-400/30" />
      
      {/* Main Card */}
      <div className="relative backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-2xl border border-gray-200/50 dark:border-white/10 p-8 shadow-xl group-hover:shadow-2xl transition-all overflow-hidden">
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 dark:group-hover:from-gold-500/10 dark:group-hover:to-yellow-500/10 transition-all duration-500 rounded-2xl" />
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gold-500 dark:to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
