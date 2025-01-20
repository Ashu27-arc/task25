import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store; 