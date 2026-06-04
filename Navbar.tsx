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
      <div className="flex gap-4">
        <Search className="w-5 h-5 cursor-pointer hover:text-gray-400" />
        <User className="w-5 h-5 cursor-pointer hover:text-gray-400" />
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-400" />
        <Menu className="w-5 h-5 cursor-pointer md:hidden" />
      </div>
    </nav>
  );
}
