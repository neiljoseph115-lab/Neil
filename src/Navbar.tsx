import { Search, User, ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 bg-[#101522] backdrop-blur-sm">
      <div className="text-4xl font-light tracking-[4px]">
        NEIL
      </div>

      <div className="flex items-center gap-6">
        <Search className="w-7 h-7" strokeWidth={1.7} />
        <User className="w-7 h-7" strokeWidth={1.7} />
        <ShoppingBag className="w-7 h-7" strokeWidth={1.7} />
        <Menu className="w-8 h-8" strokeWidth={1.7} />
      </div>
    </nav>
  );
}