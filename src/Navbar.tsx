import { Search, User, ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#101522] backdrop-blur-sm">
      <div className="text-4xl font-light tracking-[4px]">
        NEIL
      </div>

      <div className="text-2xl font-light tracking-[3px]">
        <Search className="w-5 h-5" strokeWidth={1.7} />
        <User className="w-5 h-5" strokeWidth={1.7} />
        <ShoppingBag className="w-5 h-5" strokeWidth={1.7} />
        <Menu className="w-6 h-6" strokeWidth={1.7} />
      </div>
    </nav>
  );
}