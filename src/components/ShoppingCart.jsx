import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
  const { cartItems, total, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between font-bold mb-4">
              <span>Total:</span>
              <span>${total}</span>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/')}
                className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => navigate('/payment')}
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 