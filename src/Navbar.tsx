import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({
  cart,
  setCart,
}: {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace('$', ''));
  }, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-8 bg-[#101522] text-[#f5f1e8]">
        <div className="text-3xl font-light tracking-[4px]">NEIL</div>

        <div className="flex items-center gap-6">
          <Search className="w-6 h-6" strokeWidth={1.7} />
          <User className="w-6 h-6" strokeWidth={1.7} />

          <button onClick={() => setCartOpen(true)} className="relative" aria-label="Open cart">
            <ShoppingBag className="w-6 h-6" strokeWidth={1.7} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>

          <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu className="w-7 h-7" strokeWidth={1.7} />
          </button>
        </div>
      </nav>

      {cartOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50">
          <div className="absolute right-0 top-0 h-full w-[78%] max-w-[360px] bg-[#101522] text-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Your Cart</h2>

              <button onClick={() => setCartOpen(false)} aria-label="Close cart">
                <X className="w-7 h-7" />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-400 mb-8">Your cart is empty.</p>
            ) : (
              <div className="space-y-5 mb-8">
                {cart.map((item, index) => (
                  <div key={index} className="flex gap-4 border-b border-white/10 pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div>
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.category}</p>
                      <p className="text-white mt-1">{item.price}</p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between text-lg font-bold pt-4">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            )}

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