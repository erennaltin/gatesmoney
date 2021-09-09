import MoneyBar from "./components/MoneyBar";

function App() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-64">
        <img
          className="rounded-full h-32 w-32"
          src="https://pyxis.nymag.com/v1/imgs/22f/f3f/6d9a846086df1c3990b81ccad6390eb17e-14-bill-gates.rsquare.w700.jpg"
          alt="Bill Gates"
        />
        <h1 className="font-semibold text-2xl mt-4">
          {" "}
          Spend Bill Gates' Money
        </h1>
      </div>
      <MoneyBar />
    </div>
  );
}

export default App;
