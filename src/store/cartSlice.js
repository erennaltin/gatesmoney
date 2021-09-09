import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    sellItem: (state, action) => {
      state.items = state.items.filter((element) => {
        return element.id === action.payload.id ? false : true;
      });
    },
  },
});

export const { addItem, sellItem } = cartSlice.actions;

export default cartSlice.reducer;
