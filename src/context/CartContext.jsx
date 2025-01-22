// import { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.id === product.id);
      
//       if (existingItem) {
//         return prevItems.map(item =>
//           item.id === product.id 
//             ? { ...item, quantity: (item.quantity || 1) + 1 }
//             : item
//         );
//       }
      
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   const decreaseQuantity = (productId) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.id === productId);
      
//       if (!existingItem) return prevItems;
      
//       if (existingItem.quantity === 1) {
//         // Remove item if quantity would become 0
//         return prevItems.filter(item => item.id !== productId);
//       }
      
//       // Decrease quantity
//       return prevItems.map(item =>
//         item.id === productId
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       );
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ 
//       cartItems, 
//       addToCart, 
//       removeFromCart,
//       decreaseQuantity 
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// } 