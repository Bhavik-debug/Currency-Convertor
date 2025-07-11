import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}) 

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))  //there is rates object in the API response. It contains key-value pairs of currency codes and their exchange rates relative to the base currency (like USD)
      .catch((error) => console.error("Fetch error:", error));
  }, [currency]);

  console.log(data) //now finally this data contains all the converted rates to base currency
  return data
}

export default useCurrencyInfo; 



/*
EXTRA-INFO:-
useEffect — Explained Simply
In React, useEffect is a hook that lets you run side effects in your components. Side effects are anything that interacts with the outside world or does something after rendering, like:
        Fetching data from an API ✅
        Updating the document title
        Setting up event listeners or timers
        Manually updating the DOM
Basic Syntax:
        useEffect(() => {
          // Code here runs after the component renders
        }, [dependencies]);
*/