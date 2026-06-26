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
    image: '',
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
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          letterSpacing: "4px",
          marginBottom: "40px",
        }}
      >
        NEIL
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div key={product.name}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;