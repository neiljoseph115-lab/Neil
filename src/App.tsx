import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';

const products = [
  { name: 'Essential Tee', price: '$95' },
  { name: 'Signature Hoodie', price: '$140' },
  { name: 'Classic Cap', price: '$45' },
  { name: 'Utility Jacket', price: '$180' },
];

function ShopSection() {
  return (
    <section id="shop" className="bg-[#0b1020] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
          Shop
        </p>

        <h2 className="mt-3 text-4xl font-bold uppercase tracking-tight">
          New Arrivals
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="aspect-[4/5] bg-white/10 transition duration-300 group-hover:bg-white/20" />

              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {product.name}
                </h3>
                <p className="text-sm text-white/60">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCollection() {
  return (
    <section className="bg-[#0b1020] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
          Drop 001
        </p>

        <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight">
          Featured Collection
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
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
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <ShopSection />
    </div>
  );
}
