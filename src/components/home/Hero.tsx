import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b1020] px-6 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1020]/40 to-[#0b1020]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
          New Essentials
        </p>

        <h1 className="text-6xl font-bold leading-none tracking-tight md:text-8xl">
          Engineered for <br /> Presence.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">
          Premium essentials designed for confidence, discipline, and everyday presence.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black">
            Shop Now
          </button>
          <button className="border border-white/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white">
            Explore
          </button>
        </div>
      </motion.div>
    </section>
  );
}
