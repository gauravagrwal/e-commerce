import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/Models";

type ShoppingCartState = {
  products: Product[];
};

const initialState: ShoppingCartState = {
  products: [],
};

const slice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addToCart, removeFromCart } = slice.actions;

export const ShoppingCartReducer = slice.reducer;
