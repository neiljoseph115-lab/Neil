import { useState } from 'react';
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

  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <Navbar cart={cart} />

        

        <div style={styles.heroContent}>
          <p style={styles.eyebrow}>NEW ESSENTIALS</p>

          <h1 style={styles.heroTitle}>
            Engineered
            <br />
            for
            <br />
            Presence.
          </h1>

          <p style={styles.heroSubtitle}>
            Premium essentials designed for confidence,
            <br />
            discipline, and everyday presence.
          </p>

          <div style={styles.buttons}>
            <button
              style={styles.primaryButton}
              onClick={() =>
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              SHOP NOW
            </button>

            <button
              style={styles.secondaryButton}
              onClick={() =>
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              EXPLORE
            </button>
          </div>
        </div>
      </header>

      <main id="products" style={styles.grid}>
        {products.map((product) => (
          <div
            key={product.name}
            style={styles.card}
            onClick={() => setSelectedProduct(product)}
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

      {selectedProduct && (
        <div style={styles.productOverlay}>
          <div style={styles.productPage}>
            <button
              style={styles.closeButton}
              onClick={() => setSelectedProduct(null)}
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

            <button
  style={styles.addToCartButton}
  onClick={() => {
    setCart([...cart, selectedProduct]);
    setSelectedProduct(null);
  }}
>
  ADD TO CART
</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#101522',
    color: '#fff',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },

  hero: {
    backgroundColor: '#101522',
    minHeight: '100vh',
    padding: '0 28px 60px',
  },

  heroContent: {
    textAlign: 'center' as const,
    paddingTop: '120px',
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
    fontSize: '3rem',
    lineHeight: 1.1,
    fontWeight: 900,
    margin: '0 0 24px',
    color: '#fff',
  },

  heroSubtitle: {
    color: '#b8b8b8',
    fontSize: '1rem',
    lineHeight: 1.7,
    fontWeight: 600,
    margin: '0 0 40px',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'nowrap' as const,
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 28px',
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
    height: '330px',
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
};

export default App;