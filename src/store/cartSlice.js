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
      3: {
        id: 3,
        title: "Iphone 12 Pro Max - 512GB",
        price: 1399,
        sold: 0,
        image: "https://i.imgur.com/OrjGwuh.jpg",
      },
      4: {
        id: 4,
        title: "Ultimate Gaming PC (Ryzen 5950X, RTX 3090, 64GB, 4TB SSD)",
        price: 4959,
        sold: 0,
        image: "https://i.imgur.com/LVouJCx.jpg",
      },
      5: {
        id: 5,
        title: "Entire Steam library (2021 - No discounts)",
        price: 628000,
        sold: 0,
        image: "https://i.imgur.com/W5EmtUf.jpg",
      },
      6: {
        id: 6,
        title: "Ferrari F8",
        price: 276000,
        sold: 0,
        image: "https://i.imgur.com/8LNZBZi.jpg",
      },
      7: {
        id: 7,
        title: "Private Island, Central America (medium size)",
        price: 4950000,
        sold: 0,
        image: "https://i.imgur.com/1am1OfX.jpg",
      },
      8: {
        id: 8,
        title: "F1 Team (Average)",
        price: 700000000,
        sold: 0,
        image: "https://i.imgur.com/RLozuOz.jpg",
      },
      9: {
        id: 9,
        title: "NBA Team (Average)",
        price: 2400000000,
        sold: 0,
        image: "https://i.imgur.com/jNK0U47.jpg",
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
