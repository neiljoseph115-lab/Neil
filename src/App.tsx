const products = [
  {
    name: 'Nike Air Force 1',
    category: 'Sneakers',
    price: '$120',
    image: '/products/IMG_6425.jpeg',
  },
  {
    name: 'Jordan 4 Black White',
    category: 'Sneakers',
    price: '$220',
    image: '/products/IMG_6426.jpeg',
  },
  {
    name: 'PUMA LaFrancé Purple',
    category: 'Sneakers',
    price: '$140',
    image: '/products/IMG_6427.jpeg',
  },
  {
    name: 'Affliction Octopus Tee',
    category: 'Apparel',
    price: '$65',
    image: '/products/IMG_6429.webp',
  },
  {
    name: 'Memories Vintage Tee',
    category: 'Apparel',
    price: '$55',
    image: '/products/IMG_6428.jpeg',
  },
  {
    name: 'Skeleton Graphic Tee',
    category: 'Apparel',
    price: '$60',
    image: '/products/IMG_6432.webp',
  },
  {
    name: 'Paper Chaser Tee',
    category: 'Apparel',
    price: '$55',
    image: '/products/IMG_6431.webp',
  },
];

function App() {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
  <nav style={styles.nav}>
    <h1 style={styles.brand}>NEIL</h1>
    <div style={styles.icons}>⌕ ♙ ▢ ☰</div>
  </nav>

  <div style={styles.heroContent}>
    <h2 style={styles.heroTitle}>
      Engineered for Presence.
    </h2>

    <div style={styles.buttons}>
      <button style={styles.primaryButton}>
        SHOP NOW
      </button>

      <button style={styles.secondaryButton}>
        EXPLORE
      </button>
    </div>
  </div>
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

hero: {
  minHeight: '100vh',
  padding: '28px',
  backgroundColor: '#101522',
},

nav: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
},

brand: {
  fontSize: '2rem',
  margin: 0,
},

icons: {
  fontSize: '1.5rem',
},

heroContent: {
  textAlign: 'center' as const,
  marginTop: '120px',
},

heroTitle: {
  fontSize: '4rem',
  fontWeight: 700,
  marginBottom: '40px',
},

buttons: {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
},

primaryButton: {
  padding: '18px 40px',
  border: 'none',
  backgroundColor: '#fff',
  color: '#000',
  fontWeight: 700,
},

secondaryButton: {
  padding: '18px 40px',
  border: '1px solid #fff',
  backgroundColor: 'transparent',
  color: '#fff',
},

};

export default App;