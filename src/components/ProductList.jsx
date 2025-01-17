import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'White Casual Sneaker',
    price: 70,
    image: 'https://placehold.co/300x300?text=White+Casual+Sneaker',
  },
  {
    id: 2,
    name: 'MACTREE Men\'s Mid Top Ankle Boots',
    price: 90,
    image: 'https://placehold.co/300x300?text=MACTREE+Boots',
  },
  {
    id: 3,
    name: 'Campus Men\'s Sneakers',
    price: 50,
    image: 'https://placehold.co/300x300?text=Campus+Men\'s ',
  },
  {
    id: 4,
    name: 'Campus Men\'s OG-03 Sneakers',
    price: 75,
    image: 'https://placehold.co/300x300?text=Campus+OG-03 ',
  },
  {
    id: 5,
    name: 'U.S. POLO ASSN. Men\'s PanalSneaker',
    price: 99,
    image: 'https://placehold.co/300x300?text=U.S.+POLO',
  },
  {
    id: 6,
    name: 'ASSIAN Men\'s Sport Shoes',
    price: 68,
    image: 'https://placehold.co/300x300?text=ASSIAN+Men\'s',
  },
  
  
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-2 gap-8">
      {products.map((product) => (
        <div key={product.id} className="max-w-sm">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-auto mb-4 rounded-lg"
          />
          <div className="bg-[#E6D5B8] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-xl mb-4">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full px-4 py-2 bg-transparent border-2 border-black rounded-full hover:bg-[#d6c5a8] transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      {/* <div className="col-span-2">
        <Link to="/payment" className="w-full px-4 py-2 bg-[#E6D5B8] text-center rounded-full">
          Proceed to Payment
        </Link>
      </div> */}
    </div>
  );
} 