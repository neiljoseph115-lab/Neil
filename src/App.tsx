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
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <Navbar />

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
            <button style={styles.primaryButton}>SHOP NOW</button>
            <button style={styles.secondaryButton}>EXPLORE</button>
          </div>
        </div>
      </header>

      <main style={styles.grid}>
        {products.map((product) => (
          <div key={product.name} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />

            <div style={styles.info}>
              <p style={styles.category}>{product.category}</p>
              <h2 style={styles.name}>{product.name}</h2>
              <p style={styles.price}>{product.price}</p>
            </div>
          </div>
        ))}
      </main>
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
    paddingTop: '190px',
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
    fontSize: '4rem',
    lineHeight: 1.05,
    fontWeight: 900,
    margin: '0 0 32px',
    color: '#fff',
  },

  heroSubtitle: {
    color: '#b8b8b8',
    fontSize: '1.25rem',
    lineHeight: 1.8,
    fontWeight: 600,
    margin: '0 0 48px',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    flexWrap: 'wrap' as const,
  },

  primaryButton: {
    padding: '18px 48px',
    border: 'none',
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 800,
    letterSpacing: '8px',
    fontSize: '0.95rem',
    cursor: 'pointer',
  },

  secondaryButton: {
    padding: '18px 48px',
    border: '1px solid #fff',
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 800,
    letterSpacing: '8px',
    fontSize: '0.95rem',
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
};

export default App;