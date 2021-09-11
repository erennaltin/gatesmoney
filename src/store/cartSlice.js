import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {
      1: {
        id: 1,
        title: "Nintendo Switch",
        price: 299,
        sold: 0,
        image: "https://i.imgur.com/0FO7MMz.jpg",
      },
      2: {
        id: 2,
        title: "PS5",
        price: 499,
        sold: 0,
        image: "https://i.imgur.com/0KSqKXn.jpg",
      },
    },
  },
  reducers: {
    addItem: (state, action) => {
      state.items[action.payload.id].sold += 1;
    },
    sellItem: (state, action) => {
      let sold = state.items[action.payload.id].sold;
      if (sold !== 0) {
        state.items[action.payload.id].sold -= 1;
      }
    },
  },
});

export const { addItem, sellItem } = cartSlice.actions;

export default cartSlice.reducer;
