import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 bg-[#101522] text-[#f5f1e8]">
        <div className="text-2xl font-light tracking-[3px]">NEIL</div>

        <div className="flex items-center gap-6">
          <Search className="w-5 h-5" strokeWidth={1.7} />
          <User className="w-5 h-5" strokeWidth={1.7} />
          <ShoppingBag className="w-5 h-5" strokeWidth={1.7} />

          <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6" strokeWidth={1.7} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#101522] text-white px-8 py-8">
          <div className="flex items-center justify-between mb-24">
            <div className="text-2xl font-light tracking-[3px]">NEIL</div>

            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="w-8 h-8" strokeWidth={1.7} />
            </button>
          </div>

          <div className="flex flex-col gap-4 text-2xl font-medium uppercase tracking-[5px]">
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