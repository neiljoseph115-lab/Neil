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
    image: '/products/jordan-4-black-white.jpg',
  },

  {
    name: 'PUMA LaFrancé Purple',
    category: 'Sneakers',
    price: '$140',
    image: 'https://raw.githubusercontent.com/neiljoseph115-lab/Neil/main/IMG_6427.jpeg',
  },

  {
    name: 'Affliction Octopus Tee',
    category: 'Apparel',
    price: '$65',
    image: '/products/affliction-octopus.jpg',
  },

  {
    name: 'Memories Vintage Tee',
    category: 'Apparel',
    price: '$55',
    image: '/products/memories-tee.jpg',
  },

  {
    name: 'Skeleton Graphic Tee',
    category: 'Apparel',
    price: '$60',
    image: '/products/skeleton-tee.jpg',
  },

  {
    name: 'Paper Chaser Tee',
    category: 'Apparel',
    price: '$55',
    image: '/products/paper-chaser-tee.jpg',
  },

  {
    name: 'Smile Through The Pain Tee',
    category: 'Apparel',
    price: '$55',
    image: '/products/smile-through-pain-tee.jpg',
  },
]
function App() {
  return (
    <div>
      <h1>Neil Store</h1>
      {products.map((product) => (
        <div key={product.name}>
          <img src={product.image} alt={product.name} width="200" />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;