import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
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
      </div>
    </CartProvider>
  );
}

export default App;
