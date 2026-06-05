import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';

const products = [
  { name: 'Nike Air Force 1', category: 'Sneakers', price: '$120' },
  { name: 'Air Jordan 1', category: 'Sneakers', price: '$180' },
  { name: 'PUMA LaFrancé', category: 'Sneakers', price: '$110' },
  { name: 'Rhinestone Graphic Tee', category: 'Apparel', price: '$75' },
  { name: 'Washed Distressed Tee', category: 'Apparel', price: '$65' },
  { name: 'Rockstar Oversized Tee', category: 'Apparel', price: '$85' },
];

function ShopSection() {
  return (
    <section id="shop" className="bg-[#0b1020] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
          Shop
        </p>

        <h2 className="mt-3 text-4xl font-bold uppercase tracking-tight">
          Sneakers & Apparel
        </h2>

        <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.25em]">
          <button className="border border-white bg-white px-5 py-3 text-black">
            All
          </button>
          <button className="border border-white/30 px-5 py-3 text-white">
            Sneakers
          </button>
          <button className="border border-white/30 px-5 py-3 text-white">
            Apparel
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="flex aspect-[4/5] items-center justify-center bg-white/10 text-center text-xs uppercase tracking-[0.25em] text-white/40 transition duration-300 group-hover:bg-white/20">
                Product Image
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    {product.category}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold uppercase tracking-[0.2em]">
                    {product.name}
                  </h3>
                </div>

                <p className="text-sm text-white/60">{product.price}</p>
              </div>

              <button className="mt-4 w-full border border-white/30 py-3 text-xs font-bold uppercase tracking-[0.25em] transition hover:bg-white hover:text-black">
                View Product
              </button>
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
      <ShopSection />
    </div>
  );
}
