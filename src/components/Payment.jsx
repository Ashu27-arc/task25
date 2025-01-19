import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);

  const [formData, setFormData] = useState({
    cardName: '',
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
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Order Summary</h3>
        <div className="flex justify-between items-center">
          <span>Total Amount:</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Select Payment Method</label>
          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cashOnDelivery"
                checked={formData.paymentMethod === 'cashOnDelivery'}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
            <label className="ml-4">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={formData.paymentMethod === 'creditCard'}
                onChange={handleChange}
              />
              Credit Card
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Card Holder Name</label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#E6D5B8]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#E6D5B8]"
            maxLength="19"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#E6D5B8]"
              maxLength="5"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#E6D5B8]"
              maxLength="3"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#E6D5B8] rounded text-black font-medium hover:bg-[#d6c5a8] transition-colors mt-6"
        >
          Confirm Payment
        </button>
      </form>
    </div>
  );
} 