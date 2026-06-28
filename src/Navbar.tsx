import { Search, User, ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 bg-[#101522] text-[#f5f1e8]">
      <div className="text-2xl font-light tracking-[3px]">
        NEIL
      </div>

      <div className="flex items-center gap-6">
        <Search className="w-5 h-5" strokeWidth={1.7} />
        <User className="w-5 h-5" strokeWidth={1.7} />
        <ShoppingBag className="w-5 h-5" strokeWidth={1.7} />
        <Menu className="w-6 h-6" strokeWidth={1.7} />
      </div>
    </nav>
  );
}