import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Item from "./Item";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const cart = useSelector((store) => store.cart.items);
  const cartList = Object.values(cart);

  let [categories, setCategories] = useState({
    Store: cartList,
    Cart: [],
  });

  useEffect(() => {
    setCategories({
      Store: cartList,
      Cart: cartList.filter((element) => (element.sold > 0 ? true : false)),
    });
    
    // to differ cartList easily, I used this way
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div className="w-full px-2 py-16">
      <Tab.Group>
        <Tab.List className="flex p-1 px-2  space-x-1 w-full bg-green-200 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-green-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-green-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((items, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none  ring-offset-2 ring-offset-green-400 ring-white ring-opacity-60"
              )}
            >
              <div className="flex">
                {items.map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
