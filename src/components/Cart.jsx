import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity } = useCart();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);

  const handleIncrement = (item) => {
    addToCart(item);
  };

  const handleDecrement = (itemId) => {
    decreaseQuantity(itemId);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-grow">
                <h3 className="font-medium text-lg">{item.name}</h3>
                <div className="text-gray-900">${item.price}</div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-[#E6D5B8] rounded text-black text-lg font-medium"
                >
                  -
                </button>
                <span className="w-8 text-center text-lg font-medium">
                  {item.quantity || 1}
                </span>
                <button
                  onClick={() => handleIncrement(item)}
                  className="w-8 h-8 flex items-center justify-center bg-[#E6D5B8] rounded text-black text-lg font-medium"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold">Total: ${total.toFixed(2)}</span>
        </div>
        <Link to="/payment">
          <button
            className="w-full py-2 bg-[#E6D5B8] rounded text-black font-medium hover:bg-[#d6c5a8] transition-colors"
          >
            Proceed To Payment
          </button>
        </Link>
      </div>
    </div>
  );
} 