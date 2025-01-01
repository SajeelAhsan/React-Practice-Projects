

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});
  useEffect(() => {
    if (!currency) {
      console.error("Currency is undefined");
      return;
    }
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.rates) {
          setCurrencyInfo(res.rates); // Correctly set rates
        } else {
          console.error("Invalid API response:", res);
          setCurrencyInfo({}); // Fallback to empty object
        }
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
        setCurrencyInfo({}); // Handle fetch errors gracefully
      });
  }, [currency]);
  console.log(currencyInfo);
  return currencyInfo;
}
export default useCurrencyInfo;