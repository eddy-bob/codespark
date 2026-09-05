import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Product } from "@/lib/types";
import type { RootState } from "@/lib/store/store";

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrate(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
    addItem(
      state,
      action: PayloadAction<{ product: Product; quantity?: number }>,
    ) {
      const { product, quantity = 1 } = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
        });
      }
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
        return;
      }
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        existing.quantity = quantity;
      }
    },
    removeItem(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { hydrate, addItem, updateQuantity, removeItem, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotalPrice = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

export default cartSlice.reducer;
