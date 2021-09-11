import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, sellItem } from "../store/cartSlice";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Item({ item }) {
  const sold = useSelector((store) => store.cart.items)[item.id].sold || 0;
  const dispatch = useDispatch();

  const addItemBase = () => {
    dispatch(addItem({ id: item.id}));
  };

  const sellItemBase = () => {
    dispatch(sellItem({ id: item.id }));
  };

  return (
    <div className="w-1/4 p-4 m-2 mb-12 min-w-min flex flex-col items-center ring-4 ring-green-400 rounded-lg overflow-hidden">
      <img src={item.image} alt="thing" className="rounded-lg h-2/3 w-full" />
      <h3 className="text-xl font-bold mt-4"> {item.title} </h3>
      <p className="text-lg mt-2"> {formatter.format(item.price)} </p>
      <div className="flex justify-evenly items-center w-full mt-2">
        <button
          onClick={sellItemBase}
          className="p-2 px-6 rounded-lg focus:ring-red-300 focus:ring bg-red-500 text-white font-semibold"
        >
          {" "}
          Sell{" "}
        </button>
        <p className="px-4 p-2 border-2 rounded-lg"> {sold} </p>
        <button
          onClick={addItemBase}
          className="p-2 px-6 rounded-lg bg-green-500 focus:ring-green-300 focus:ring text-white font-semibold"
        >
          {" "}
          Buy{" "}
        </button>
      </div>
    </div>
  );
}
