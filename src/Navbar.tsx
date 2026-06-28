import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-8 bg-[#101522] text-[#f5f1e8]">
        <div className="text-3xl font-light tracking-[4px]">NEIL</div>

        <div className="flex items-center gap-6">
          <Search className="w-6 h-6" strokeWidth={1.7} />
          <User className="w-6 h-6" strokeWidth={1.7} />

          <button onClick={() => setCartOpen(true)} aria-label="Open cart">
            <ShoppingBag className="w-6 h-6" strokeWidth={1.7} />
          </button>

          <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu className="w-7 h-7" strokeWidth={1.7} />
          </button>
        </div>
      </nav>

      {cartOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50">
          <div className="absolute right-0 top-0 h-full w-[78%] max-w-[360px] bg-[#101522] text-white p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Your Cart</h2>

              <button onClick={() => setCartOpen(false)} aria-label="Close cart">
                <X className="w-7 h-7" />
              </button>
            </div>

            <p className="text-gray-400 mb-8">Your cart is empty.</p>

            <button className="w-full bg-white text-black py-4 font-bold tracking-[3px]">
              CHECKOUT
            </button>
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#101522] text-white px-8 py-8">
          <div className="flex items-center justify-between mb-20">
            <div className="text-2xl font-light tracking-[3px]">NEIL</div>

            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="w-8 h-8" strokeWidth={1.7} />
            </button>
          </div>

          <div className="flex flex-col gap-8 text-2xl font-medium uppercase tracking-[5px]">
            <a href="#">Shop</a>
            <a href="#">Collections</a>
            <a href="#">Our Story</a>
            <a href="#">Contact</a>
          </div>
        </div>
      )}
    </>
  );
}