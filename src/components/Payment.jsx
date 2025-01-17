import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Payment() {
  const history = useHistory();

  const handlePayment = () => {
    history.push('/payment-confirmation');
  };

  return (
    <div className="payment-form">
      <h2>Payment Information</h2>
      <div>
        <label>
          <input type="radio" name="payment-method" value="cash" />
          Cash on Delivery
        </label>
        <label>
          <input type="radio" name="payment-method" value="credit-card" defaultChecked />
          Credit Card
        </label>
      </div>
      <label>
        Enter your card number:
        <input type="text" placeholder="Card Number" />
      </label>
      <label>
        Enter your card's expiry date:
        <input type="text" placeholder="Expiry Date" />
      </label>
      <label>
        Enter your CVV number:
        <input type="text" placeholder="CVV" />
      </label>
      <button className="confirm-payment" onClick={handlePayment}>Confirm Payment</button>
    </div>
  );
} 