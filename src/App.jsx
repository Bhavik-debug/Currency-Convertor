import { useState } from 'react';
import useCurrencyInfo from './CustomHooks/useCurrencyinfo';
import { InputBox } from './Components/index.js';

function App() {
  const [amount, setAmount] = useState(0);//initial amt is 0 
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);//initially it will also visible as 0

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };  //pritty obvious!!

  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg')`,
      }}
    >
      <div className="w-screen">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-green-200">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}//similar like onClick func
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                style={{ transform: 'translateX(-55px) translateX(-2px)'}}
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default App;