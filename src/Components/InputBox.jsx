import React from "react";

function InputBox({
    //all variables we are going to use
    label,
    amount, 
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "",
    amountDisable = false,
    currencyDisable = false,  
    className = "",

}) {
   
    return (
        <div className={`p-3 rounded-lg text-sm flex ${className}`}>

            <div className="w-1/2">
                <label  className="text-black/80 font-bold text-xl mb-2 inline-block">
                    {label}
                </label>

                <input                    
                    className="outline-none font-semibold text-blue-900 text-lg w-full py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">

                <p className="text-black/80 font-bold text-xl mb-2 w-full">Currency Type</p>

                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 text-black cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >                    
                        {currencyOptions.map( (currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                                //dont forget to write key in loops in react
                            ) )}                
                </select>

            </div>
            
        </div>
    );
}

export default InputBox;