import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';

function FeaturedCollection() {
  return (
    <section className="bg-[#0b1020] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
              Drop 001
            </p>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight">
              Featured Collection
            </h2>
          </div>
          <button className="hidden border border-white/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white md:block">
            View All
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {['Essential Tee', 'Signature Hoodie', 'Utility Jacket'].map((item) => (
            <div key={item} className="group">
              <div className="aspect-[4/5] bg-white/10 transition duration-300 group-hover:bg-white/20" />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {item}
                </h3>
                <p className="text-sm text-white/60">$95</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-[#0b1020] text-white min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollection />
    </div>
  );
}
