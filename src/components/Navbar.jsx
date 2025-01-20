import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const { items, total } = useSelector((state) => state.cart);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Home Link */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            ShoeStore
          </Link>

          {/* Cart Summary */}
          <div className="flex items-center gap-4">
            <div className="text-right mr-2">
              <p className="text-sm text-gray-600">
                Cart Total: <span className="font-semibold">${total}</span>
              </p>
              <p className="text-xs text-gray-500">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </p>
            </div>
            
            {/* Cart Icon with Badge */}
            <Link 
              to="/payment" 
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 