import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        {/* Placeholder for editorial image/video */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558788353-f76dee027d16?q=80&w=2678&auto=format&fit=crop')] bg-cover bg-center brightness-50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6"
      >
        <h1 className="font-display font-medium text-white text-5xl md:text-8xl tracking-tighter mb-6">
          Engineered for <br /> Presence.
        </h1>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black font-sans uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors">
            Shop Now
          </button>
          <button className="px-8 py-4 bg-transparent border border-white text-white font-sans uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors">
            Explore
          </button>
        </div>
      </motion.div>
    </section>
  );
}
