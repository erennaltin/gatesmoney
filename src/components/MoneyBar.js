import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function MoneyBar() {
  const cart = useSelector((state) => state.cart.items);
  const cartList = Object.values(cart);
  const [money, setMoney] = useState(100_000_000_000);

  useEffect(() => {
    const discount = cartList.reduce((prev, next) => {
      let total = next.price * next.sold;
      return (prev += total);
    }, 0);
    setMoney(100_000_000_000 - discount);
    // to differ cartList easily, I used this way
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div className=" bg-gradient-to-b from-green-400 to-green-600 py-4 mx-4 rounded-xl text-white font-bold text-3xl">
      <p className="text-center">{formatter.format(money)}</p>
    </div>
  );
}
