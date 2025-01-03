import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components';




function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");
  const [exchangeRate, setExchangeRate] = useState();

  const currencyInfo = useCurrencyInfo(fromCurrency);
 const options = Object.keys(currencyInfo);

  const swapCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

    // Recalculate the exchange rate dynamically
    setExchangeRate(amount * (currencyInfo[toCurrency] || 1));
  }

  const handleFromAmountChange = (newAmount) => {
    setAmount(newAmount);
    setExchangeRate(newAmount * (currencyInfo[toCurrency] || 1));
  }
  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://media.istockphoto.com/id/818517624/de/foto/welt-w%C3%A4hrung-exchange-table-graph.jpg?s=2048x2048&w=is&k=20&c=sgQ_WVSotS0Pmp3RiXPTUVdirB8yqv2bvVyg9yljaPk=')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           handleFromAmountChange(amount);
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFromCurrency(currency)}
                                selectCurrency={fromCurrency}
                                onAmountChange={(amount) => setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapCurrency}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={exchangeRate}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setToCurrency(currency)}
                                selectCurrency={toCurrency}
                                onAmountChange={(amount) => setAmount(amount)}
                                
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {fromCurrency} to {toCurrency}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default App
