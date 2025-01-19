import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Payment from './components/Payment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-7xl mx-auto px-8 py-8">
                  <div className="flex gap-8">
                    <div className="flex-grow">
                      <ProductList />
                    </div>
                    <div className="w-80 flex-shrink-0">
                      <Cart />
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
