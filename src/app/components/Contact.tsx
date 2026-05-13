
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';


export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setError(null);
    try {
      await emailjs.send(
        'service_v8uowmh',
        'template_3sgq8pa',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'DiuH_Wk8Q-Y-IuzWm'
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Ready to transform education? Let's start a conversation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/70 dark:bg-white/5 rounded-3xl border border-gray-200/50 dark:border-white/10 p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="text-red-600 dark:text-red-400 text-center mb-4">{error}</div>
            )}
            <div>
              <label htmlFor="name" className="block text-gray-900 dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gold-400 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gold-400 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gold-400 transition-all resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={submitted}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-500 dark:to-yellow-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {submitted ? (
                'Message Sent!'
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
