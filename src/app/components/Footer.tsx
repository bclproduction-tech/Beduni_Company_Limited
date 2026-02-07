import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 px-6 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-t border-gray-200/50 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gold-400 dark:to-yellow-500 bg-clip-text text-transparent mb-4">
              Beduni Company Limited
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Empowering African education through innovative mathematics software solutions. We build the future of digital learning, one platform at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gold-500 dark:to-yellow-600 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gold-500 dark:to-yellow-600 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gold-500 dark:to-yellow-600 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gold-500 dark:to-yellow-600 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gold-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gold-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gold-400 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gold-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gold-400 transition-colors"
                >
                  Hesabu Safi
                </button>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Beduni Company Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="legal/privacy-policy.html" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gold-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="legal/terms-of-service.html" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gold-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
