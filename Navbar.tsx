import { ShoppingBag, Search, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 bg-transparent text-white mix-blend-difference">
      <div className="text-2xl font-display font-medium tracking-tighter">NEIL</div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-sans font-medium">
        <a href="#" className="hover:text-gray-400 transition-colors">Shop</a>
        <a href="#" className="hover:text-gray-400 transition-colors">Collections</a>
        <a href="#" className="hover:text-gray-400 transition-colors">Our Story</a>
      </div>
      <div className="flex items-center gap-6">
        <Search className="w-7 h-7 cursor-pointer text-[#f5f1e8]" strokeWidth={1.7} />
<User className="w-7 h-7 cursor-pointer text-[#f5f1e8]" strokeWidth={1.7} />
<ShoppingBag className="w-7 h-7 cursor-pointer text-[#f5f1e8]" strokeWidth={1.7} />
<Menu className="w-8 h-8 cursor-pointer text-[#f5f1e8]" strokeWidth={1.7} />
      </div>
    </nav>
  );
}
