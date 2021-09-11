import React from "react";
import { useSelector } from "react-redux";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export default function Receipt() {
  const cart = useSelector((store) => store.cart.items);
  const cartList = Object.values(cart);

  return (
    <div className="w-full bg-green-100 flex flex-wrap items-center justify-center">
      {cartList.map((item) => {
        return item.sold > 0 && <Row item={item} key={item.id} />;
      })}
      <div className="flex items-center justify-between w-2/3 p-2 bg-green-300">
        <p className="text-xl font-bold"> TOTAL </p>
        <p className="flex justify-end text-xl font-bold text-green-800"> {formatter.format(500)} </p>
      </div>
    </div>
  );
}

function Row({ item }) {
  return (
    <div className="w-2/3 grid grid-cols-3 justify-center items-center p-2 bg-green-200">
      <p className="text-lg font-semibold"> {item.title} </p>
      <p className="flex justify-center text-lg"> x{item.sold} </p>
      <p className="flex justify-end text-xl font-bold text-green-600">
        {formatter.format(item.price)}
      </p>
    </div>
  );
}
