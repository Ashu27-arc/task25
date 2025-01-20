import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default App; 