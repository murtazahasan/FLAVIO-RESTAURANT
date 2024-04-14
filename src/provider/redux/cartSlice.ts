// cartSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  quantity: number;
  // Add other properties as needed
}

interface CartState {
  items: CartItem[];
  count: number; // Add count property to manage the total count of items in the cart
}

const initialState: CartState = {
  items: [],
  count: 0, // Initialize count to 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
      } else {
        action.payload.quantity = 1;
        state.items.push(action.payload);
      }
      state.count++; // Increment count when adding an item to the cart
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.count--; // Decrement count when removing an item from the cart
      }
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
        state.count++; // Increment count when increasing item quantity
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
        state.count--; // Decrement count when decreasing item quantity
      }
    },
    // Add other reducers as needed
  },
});

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
