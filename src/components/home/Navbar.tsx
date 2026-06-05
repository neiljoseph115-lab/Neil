import { useState } from 'react';
import { ShoppingBag, Search, Menu, User, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 text-white md:px-12">
        <div className="text-2xl font-medium tracking-tighter">NEIL</div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#shop">Shop</a>
          <a href="#">Collections</a>
          <a href="#">Our Story</a>
        </div>

        <div className="flex gap-5">
          <Search className="h-6 w-6" />
          <User className="h-6 w-6" />
          <ShoppingBag className="h-6 w-6" />

          <button onClick={() => setMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0b1020] px-6 py-8 text-white">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-medium tracking-tighter">NEIL</div>

            <button onClick={() => setMenuOpen(false)}>
              <X className="h-7 w-7" />
            </button>
          </div>

          <div className="mt-20 flex flex-col gap-8 text-4xl font-bold uppercase tracking-tight">
            <a href="#shop" onClick={() => setMenuOpen(false)}>
              Shop
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Collections
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Our Story
            </a>

            <a href="#" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
