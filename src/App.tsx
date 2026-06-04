import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
