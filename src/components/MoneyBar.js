import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";


export default function MoneyBar({...props}) {
  const cart = useSelector((state) => state.cart.items);
  const cartList = Object.values(cart);
  const [money, setMoney] = useState(100_000_000_000);
  const [oldMoney, setOldMoney] = useState(100_000_000_000);

  useEffect(() => {
    const discount = cartList.reduce((prev, next) => {
      let total = next.price * next.sold;
      return (prev += total);
    }, 0);
    setMoney(100_000_000_000 - discount);
    setTimeout(() => {
      setOldMoney(money);
    }, 1);
    // to differ cartList easily, I used this way
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div className={`flex items-center sticky top-0 justify-center bg-gradient-to-b from-green-400 to-green-600 py-4  rounded-xl text-white font-bold text-3xl ${props.className}`}>
      <CountUp
        start={oldMoney}
        end={money}
        duration={0.8}
        separator=","
        decimal="."
        suffix="$"
      />
      {({ countUpRef }) => (
        <div >
          <span ref={countUpRef} />
        </div>
      )}
    </div>
  );
}
