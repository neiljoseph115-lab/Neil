const products = [
image: '/products/IMG_6425.jpeg' // Nike
image: '/products/JORDAN-FILE-NAME.jpeg' // Jordan
image: '/products/PUMA-FILE-NAME.jpeg' // Puma
image: '/products/IMG_6429.webp' // Affliction
image: '/products/IMG_6428.jpeg' // Memories
image: '/products/IMG_6432.webp' // Skeleton
image: '/products/IMG_6431.webp' // Paper Chaser
];

function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.logo}>NEIL</h1>
        <p style={styles.tagline}>Streetwear & Sneakers</p>
      </header>

      <div style={styles.grid}>
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
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#050505',
    color: '#fff',
    minHeight: '100vh',
    padding: '28px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '45px',
  },
  logo: {
    fontSize: '4rem',
    letterSpacing: '12px',
    margin: 0,
    fontWeight: 300,
  },
  tagline: {
    color: '#aaa',
    marginTop: '10px',
    letterSpacing: '2px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#111',
    border: '1px solid #222',
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
    color: '#888',
    fontSize: '0.85rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
    margin: '0 0 8px',
  },
  name: {
    fontSize: '1.3rem',
    margin: '0 0 10px',
  },
  price: {
    fontSize: '1.2rem',
    margin: 0,
    color: '#fff',
  },
};

export default App;