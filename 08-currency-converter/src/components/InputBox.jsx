import React, {useId} from "react";

/**
 * A functional component that renders an input box for amount and a dropdown for currency selection.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label for the amount input.
 * @param {number} props.amount - The value of the amount input.
 * @param {function} props.onAmountChange - The callback function to handle changes in the amount input.
 * @param {function} props.onCurrencyChange - The callback function to handle changes in the currency dropdown.
 * @param {Array<string>} [props.currencyOptions=[]] - The list of currency options for the dropdown.
 * @param {string} [props.selectCurrency="usd"] - The selected currency value.
 * @param {boolean} [props.amountDisable=false] - Whether the amount input is disabled.
 * @param {boolean} [props.currencyDisable=false] - Whether the currency dropdown is disabled.
 * @param {string} [props.className=""] - Additional class names for the component.
 * @returns {JSX.Element} The rendered input box component.
 */
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {

 const amountInputId = useId()

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled={currencyDisable}
              >
                  
                      {currencyOptions.map((currency) => (
                          <option key={currency} value={currency}>
                          {currency}
                          </option>
                      ))}
              
              </select>
          </div>
      </div>
  );
}

/**
 * Default export of the InputBox component.
 */
export default InputBox; // Default export
