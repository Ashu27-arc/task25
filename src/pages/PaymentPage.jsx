import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

export default function PaymentPage() {
  const { items, total } = useSelector((state) => state.cart);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    alert('Payment processed successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              <div className="text-xl font-bold mt-4">
                Total: ${total}
              </div>
            </>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <input 
                type="text" 
                placeholder="1234 5678 9012 3456" 
                className="w-full p-2 border rounded-md"
                required 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Expiry Date</label>
                <input 
                  type="text" 
                  placeholder="MM/YY" 
                  className="w-full p-2 border rounded-md"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input 
                  type="text" 
                  placeholder="123" 
                  className="w-full p-2 border rounded-md"
                  required 
                />
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Pay ${total}
            </button>
          </form>
        </div>
      </div>

      <Link 
        to="/" 
        className="inline-block mt-6 text-blue-600 hover:text-blue-800"
      >
        ← Return to Shopping
      </Link>
    </div>
  );
} 