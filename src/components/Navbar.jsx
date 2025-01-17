import { useCart } from '../context/CartContext';

export default function Navbar({ setIsCartOpen }) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center">
        <div className="w-12 h-12">
          <img 
            src="https://placehold.co/48x48?text=🦌" 
            alt="Deer Logo" 
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex gap-8 ml-8">
          <a href="#" className="text-xl">Home</a>
          <a href="#" className="text-xl">Categories</a>
          <a href="#" className="text-xl">About Us</a>
        </div>
      </div>
    </nav>
  );
} 