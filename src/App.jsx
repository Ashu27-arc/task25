import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import PaymentPage from './pages/PaymentPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </div>
  )
}

export default App
