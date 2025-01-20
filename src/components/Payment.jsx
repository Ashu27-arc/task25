import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'creditCard'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment
    alert('Payment processed successfully!');
    navigate('/');
  };

  return (
    <div className="flex justify-between max-w-6xl mx-auto p-6">
      <div className="w-2/3">
        <div className="mb-6">
          <label className="mr-8">
            <input
              type="radio"
              name="paymentMethod"
              value="cashOnDelivery"
              checked={formData.paymentMethod === 'cashOnDelivery'}
              onChange={handleChange}
            />
            <span className="ml-2">Cash on Delivery</span>
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={formData.paymentMethod === 'creditCard'}
              onChange={handleChange}
            />
            <span className="ml-2">Credit Card</span>
          </label>
        </div>

        {formData.paymentMethod === 'creditCard' && (
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-xl">
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Enter your card number:</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Enter your card's expiry date:</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">Enter your CVV number:</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                maxLength="3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-40 py-2 bg-[#E6D5B8] rounded text-black font-medium hover:bg-[#d6c5a8] transition-colors"
              onClick={handleSubmit}
            >
              Confirm Payment
            </button>
          </div>
        )}
      </div>

      <div className="w-1/3 bg-gray-50 p-6 rounded-lg h-fit">
        <h2 className="text-2xl font-bold mb-6">Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 mb-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="text-xl font-bold mt-6 mb-4">Total: ${total.toFixed(2)}</div>
        <button
          onClick={() => navigate('/')}
          className="w-full py-2 bg-[#E6D5B8] rounded text-black font-medium hover:bg-[#d6c5a8] transition-colors"
        >
          Go back to Shopping
        </button>
      </div>
    </div>
  );
} 