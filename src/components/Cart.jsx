import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart, addToCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-6 h-6 flex items-center justify-center border-2 border-black rounded-full"
                >
                  -
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-6 h-6 flex items-center justify-center border-2 border-black rounded-full"
                >
                  +
                </button>
              </div>
              <div className="flex-grow">
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="font-semibold flex-shrink-0">${(item.price * item.quantity || 0).toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">Total:</span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
        <Link to="/payment">
          <button
            className="w-full px-4 py-2 bg-[#E6D5B8] rounded-full text-black font-semibold hover:bg-[#d6c5a8] transition-colors"
          >
            Proceed To Payment
          </button>
        </Link>
      </div>
    </div>
  );
} 