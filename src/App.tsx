mport { useState, useEffect } from 'react';
import Navbar from './Navbar';

const products = [
  { name: 'Nike Air Force 1', category: 'Sneakers', price: '$120', image: '/products/IMG_6425.jpeg' },
  { name: 'Jordan 4 Black White', category: 'Sneakers', price: '$220', image: '/products/IMG_6426.jpeg' },
  { name: 'PUMA LaFrancé Purple', category: 'Sneakers', price: '$140', image: '/products/IMG_6427.jpeg' },
  { name: 'Affliction Octopus Tee', category: 'Apparel', price: '$65', image: '/products/IMG_6429.webp' },
  { name: 'Memories Vintage Tee', category: 'Apparel', price: '$55', image: '/products/IMG_6428.jpeg' },
  { name: 'Skeleton Graphic Tee', category: 'Apparel', price: '$60', image: '/products/IMG_6432.webp' },
  { name: 'Paper Chaser Tee', category: 'Apparel', price: '$55', image: '/products/IMG_6431.webp' },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('neil-cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('neil-cart', JSON.stringify(cart));
  }, [cart]);

  const searchResults = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sizes = selectedProduct?.category === 'Sneakers'
    ? ['7', '8', '9', '10', '11', '12']
    : ['S', 'M', 'L', 'XL'];

  const checkoutTotal = cart.reduce((sum, item) => {
    const price = Number(item.price.replace('$', ''));
    return sum + price * (item.quantity || 1);
  }, 0);

  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <Navbar
          cart={cart}
          setCart={setCart}
          setSearchOpen={setSearchOpen}
          setCheckoutOpen={setCheckoutOpen}
        />

        <div style={styles.heroContent}>
          <p style={styles.eyebrow}>
            EST. 2025
        </p>

        <h1 style={styles.heroTitle}>
          Built Different.
          <br />
          Worn Daily.
        </h1>

        <p style={styles.heroSubtitle}>
          Premium sneakers and apparel curated
          <br />
          for those who refuse ordinary.
        </p>

          <div style={styles.buttons}>
            <button
              style={styles.primaryButton}
              onClick={() =>
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              SHOP COLLECTION
            </button>

            <button
              style={styles.secondaryButton}
              onClick={() =>
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              NEW ARRIVALS 
            </button>
          </div>
        </div>
      </header>

      <main id="products" style={styles.grid}>
        {products.map((product) => (
          <div
            key={product.name}
            style={styles.card}
            onClick={() => {
              setSelectedProduct(product);
              setSelectedSize('');
            }}
          >
            <img src={product.image} alt={product.name} style={styles.image} />

            <div style={styles.info}>
              <p style={styles.category}>{product.category}</p>
              <h2 style={styles.name}>{product.name}</h2>
              <p style={styles.price}>{product.price}</p>
            </div>
          </div>
        ))}
      </main>

      {searchOpen && (
        <div style={styles.searchOverlay}>
          <button
            style={styles.closeButton}
            onClick={() => {
              setSearchOpen(false);
              setSearchTerm('');
            }}
          >
            ×
          </button>

          <input
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />

          <div style={styles.searchResults}>
            {searchResults.map((product) => (
              <div
                key={product.name}
                style={styles.searchItem}
                onClick={() => {
                  setSelectedProduct(product);
                  setSelectedSize('');
                  setSearchOpen(false);
                  setSearchTerm('');
                }}
              >
                <img src={product.image} alt={product.name} style={styles.searchImage} />

                <div>
                  <h3 style={styles.searchName}>{product.name}</h3>
                  <p style={styles.searchCategory}>{product.category}</p>
                  <p style={styles.searchPrice}>{product.price}</p>
                </div>
              </div>
            ))}

            {searchResults.length === 0 && (
              <p style={styles.noResults}>No products found.</p>
            )}
          </div>
        </div>
      )}

      {selectedProduct && (
        <div style={styles.productOverlay}>
          <div style={styles.productPage}>
            <button
              style={styles.closeButton}
              onClick={() => {
                setSelectedProduct(null);
                setSelectedSize('');
              }}
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={styles.productImage}
            />

            <p style={styles.category}>{selectedProduct.category}</p>
            <h1 style={styles.productTitle}>{selectedProduct.name}</h1>
            <p style={styles.productPrice}>{selectedProduct.price}</p>

            <div style={styles.sizeSection}>
              <p style={styles.sizeLabel}>Select Size</p>

              <div style={styles.sizeGrid}>
                {sizes.map((size) => (
                  <button
                    key={size}
                    style={{
                      ...styles.sizeButton,
                      ...(selectedSize === size ? styles.selectedSizeButton : {}),
                    }}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              style={styles.addToCartButton}
              onClick={() => {
                if (!selectedSize) {
                  alert('Please select a size');
                  return;
                }

                const existingItem = cart.find(
                  (item) => item.name === selectedProduct.name && item.size === selectedSize
                );

                if (existingItem) {
                  setCart(
                    cart.map((item) =>
                      item.name === selectedProduct.name && item.size === selectedSize
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                    )
                  );
                } else {
                  setCart([...cart, { ...selectedProduct, size: selectedSize, quantity: 1 }]);
                }

                setSelectedProduct(null);
                setSelectedSize('');
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      )}

      {checkoutOpen && (
        <div style={styles.productOverlay}>
          <div style={styles.productPage}>
            <button
              style={styles.closeButton}
              onClick={() => setCheckoutOpen(false)}
            >
              ×
            </button>

            <h1 style={styles.productTitle}>Checkout</h1>

            <h2 style={styles.checkoutSectionTitle}>Contact</h2>

            <input
              placeholder="Email Address"
              style={styles.checkoutInput}
            />

            <h2 style={styles.checkoutSectionTitle}>Shipping</h2>

            <input placeholder="First Name" style={styles.checkoutInput} />
            <input placeholder="Last Name" style={styles.checkoutInput} />
            <input placeholder="Street Address" style={styles.checkoutInput} />
            <input placeholder="City" style={styles.checkoutInput} />
            <input placeholder="State / Province" style={styles.checkoutInput} />
            <input placeholder="ZIP / Postal Code" style={styles.checkoutInput} />

            <div style={styles.checkoutSummary}>
              <h2 style={styles.checkoutHeading}>Order Summary</h2>

              {cart.map((item, index) => {
                const quantity = item.quantity || 1;
                const itemTotal = Number(item.price.replace('$', '')) * quantity;

                return (
                  <div key={index} style={styles.checkoutItem}>
                    <span>
                      {item.name} {item.size && `(Size ${item.size})`} × {quantity}
                    </span>
                    <span>${itemTotal}</span>
                  </div>
                );
              })}

              <div style={styles.checkoutTotal}>
                <span>Total</span>
                <span>${checkoutTotal}</span>
              </div>
            </div>

            <button
              style={{
                ...styles.addToCartButton,
                marginTop: '30px',
              }}
              onClick={async () => {
                const response = await fetch('/api/create-checkout-session', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    items: cart,
                  }),
                });

                const data = await response.json();

                if (data.url) {
                  window.location.href = data.url;
                } else {
                  alert('Something went wrong with checkout.');
                }
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      )}

      {orderPlaced && (
        <div style={styles.thankYouOverlay}>
          <div style={styles.thankYouCard}>
            <h1 style={styles.thankYouTitle}>THANK YOU</h1>

            <p style={styles.thankYouText}>
              Your order has been received.
            </p>

            <button
              style={styles.primaryButton}
              onClick={() => setOrderPlaced(false)}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  checkoutSectionTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    marginTop: '24px',
    marginBottom: '12px',
    color: '#fff',
  },

  page: {
    backgroundColor: '#101522',
    color: '#fff',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },

  hero: {
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 24px',
    position: 'relative',
    overflow: 'hidden',

    backgroundImage:
      "linear-gradient(rgba(10,10,10,0.55), rgba(10,10,10,0.75)), url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80')",

    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  },

  heroContent: {
    textAlign: 'center' as const,
    paddingTop: '105px',
    maxWidth: '900px',
    margin: '0 auto',
  },

  eyebrow: {
    color: '#9ca3af',
    letterSpacing: '12px',
    fontSize: '0.85rem',
    fontWeight: 700,
    marginBottom: '32px',
  },

  heroTitle: {
    fontSize: 'clamp(3rem, 8vw, 5.5rem)',
    lineHeight: 1,
    fontWeight: 900,
    letterSpacing: '-3px',
    margin: '0 0 24px',
    color: '#fff',
  },

  heroSubtitle: {
    color: '#d1d5db',
    fontSize: '1.2rem',
    lineHeight: 1.8,
    fontWeight: 500,
    maxWidth: '650px',
    margin: '0 auto 40px',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap', as const,
    marginTop: '40px',
  },

  primaryButton: {
    width: '220px',
    height: '60px',
    border: 'none',
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 700,
    fontSize: '1rem',
    letterSpacing: '2px',
    cursor: 'pointer',
  },

  secondaryButton: {
    width: '220px',
    height: '60px',
    border: '1px solid #fff',
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 400,
    fontSize: '1rem',
    letterSpacing: '2px',
    cursor: 'pointer',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '28px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '28px 24px 50px',
    backgroundColor: '#101522',
  },

  card: {
    backgroundColor: '#111',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '18px',
    overflow: 'hidden',
    cursor: 'pointer',
  },

  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover' as const,
    display: 'block',
  },

  info: {
    padding: '18px',
  },

  category: {
    color: '#aaa',
    fontSize: '0.85rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
    margin: '0 0 8px',
  },

  name: {
    fontSize: '1.3rem',
    margin: '0 0 10px',
    color: '#fff',
  },

  price: {
    fontSize: '1.2rem',
    margin: 0,
    color: '#fff',
  },

  searchOverlay: {
    position: 'fixed' as const,
    inset: 0,
    backgroundColor: '#101522',
    zIndex: 300,
    padding: '28px',
    color: '#fff',
    overflowY: 'auto' as const,
  },

  searchInput: {
    width: '100%',
    padding: '18px',
    fontSize: '1.1rem',
    backgroundColor: '#111',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.2)',
    marginBottom: '28px',
    outline: 'none',
  },

  searchResults: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '18px',
  },

  searchItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    cursor: 'pointer',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '16px',
  },

  searchImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover' as const,
    borderRadius: '10px',
  },

  searchName: {
    margin: '0 0 4px',
    fontSize: '1rem',
  },

  searchCategory: {
    margin: '0 0 4px',
    color: '#aaa',
    fontSize: '0.85rem',
  },

  searchPrice: {
    margin: 0,
    color: '#fff',
  },

  noResults: {
    color: '#aaa',
    fontSize: '1rem',
  },

  productOverlay: {
    position: 'fixed' as const,
    inset: 0,
    backgroundColor: '#101522',
    zIndex: 200,
    overflowY: 'auto' as const,
    padding: '28px',
  },

  productPage: {
    maxWidth: '700px',
    margin: '0 auto',
    color: '#fff',
  },

  closeButton: {
    fontSize: '3rem',
    background: 'transparent',
    color: '#fff',
    border: 'none',
    marginBottom: '20px',
    cursor: 'pointer',
  },

  productImage: {
    width: '100%',
    borderRadius: '18px',
    marginBottom: '28px',
  },

  productTitle: {
    fontSize: '2.2rem',
    margin: '10px 0',
  },

  productPrice: {
    fontSize: '1.5rem',
    marginBottom: '28px',
  },

  sizeSection: {
    marginBottom: '28px',
  },

  sizeLabel: {
    fontSize: '0.9rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
    color: '#aaa',
    marginBottom: '12px',
  },

  sizeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },

  sizeButton: {
    padding: '14px',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.35)',
    fontWeight: 700,
    cursor: 'pointer',
  },

  selectedSizeButton: {
    backgroundColor: '#fff',
    color: '#000',
  },

  addToCartButton: {
    width: '100%',
    padding: '18px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    fontWeight: 800,
    letterSpacing: '4px',
    cursor: 'pointer',
  },

  checkoutInput: {
    width: '100%',
    padding: '14px 16px',
    marginTop: '12px',
    backgroundColor: '#0f1420',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.15)',
    outline: 'none',
    fontSize: '1rem',
  },

  checkoutSummary: {
    marginTop: '30px',
    padding: '24px',
    backgroundColor: '#0f1420',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
  },

  checkoutHeading: {
    fontSize: '1.3rem',
    marginBottom: '16px',
  },

  checkoutItem: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    marginTop: '12px',
    color: '#ccc',
    fontSize: '0.95rem',
  },

  checkoutTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: '1px solid rgba(255,255,255,0.15)',
    marginTop: '20px',
    paddingTop: '20px',
    fontWeight: 800,
    fontSize: '1.2rem',
  },

  thankYouOverlay: {
    position: 'fixed' as const,
    inset: 0,
    backgroundColor: '#101522',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },

  thankYouCard: {
    textAlign: 'center' as const,
    maxWidth: '500px',
  },

  thankYouTitle: {
    fontSize: '3rem',
    fontWeight: 900,
    marginBottom: '20px',
  },

  thankYouText: {
    color: '#aaa',
    fontSize: '1.1rem',
    marginBottom: '40px',
  },
};

export default App;