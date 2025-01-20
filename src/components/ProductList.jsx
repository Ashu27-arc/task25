import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
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
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="text-right">
          <p className="text-lg">Cart Total: ${total}</p>
          <p className="text-sm text-gray-600">Items in cart: {items.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-2xl font-bold mb-4">${product.price}</p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        {items.length > 0 && (
          <div className="fixed bottom-4 right-4">
            <Link 
              to="/payment" 
              className="block px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors"
            >
              Proceed to Payment (${total})
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 