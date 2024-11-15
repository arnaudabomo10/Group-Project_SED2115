import React, { useState } from 'react';
import axios from 'axios'; //JavaScript library that allows developers to make HTTPs requests (in this case to API)

//Currency conversion component
const CurrencyConverter = () => {
    const [amount, setAmount] = useState(); //State to store amount to be converted
    const [fromCurrency, setFromCurrency] = useState(); //State to store original currency code
    const [toCurrency, setToCurrency] = useState(); //State to store target currency code
    const [exchangeRate, setExchangeRate] = useState(null); //State to store exccahnge rate retrieved from the API
    const [convertedAmount, setConvertedAmount] = useState(null); //State to store conversion result 
    const [error, setError] = useState(null); //State to store error message if API doesn't work

    const apiKey = 'SUYU7HEBBZEV3G13'; // From https://www.alphavantage.co/support/#api-key

    const handleConvert = async () => { // Function to to handle currency conversaion by fetching exchange rate from the API. async is related to promise
        //Reset the following states before the new API call
        setError(null);
        setExchangeRate(null);
        setConvertedAmount(null);

        try {
            const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${apiKey}`;
            const response = await axios.get(url); //Make an API request
            const rate = response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']; //Extract exchange rareyt value from API response

            if (rate) { //If a rate is aqcuired, update the rate and calculate converted amount
                setExchangeRate(parseFloat(rate));
                setConvertedAmount((amount * rate).toFixed(2)); //Round converted amount to 2 decimal places
            } else {
                throw new Error('Exchange rate not found'); //Show error if rate is not found in response
            }
        } catch (error) {
            setError('Failed to retrieve exchange rate'); //Set error state if API call fails 
        }
    };

    return (
        <div>
            <h1>Currency Converter</h1>
            <input //Input field for amount
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder="Amount"
            />
            <input //Input field for original currency
                type="text"
                value={fromCurrency}
                onChange={(event) => setFromCurrency(event.target.value.toUpperCase())}
                placeholder="From Currency ie. CAD"
            />
            <input //Input field for target currency
                type="text"
                value={toCurrency}
                onChange={(event) => setToCurrency(event.target.value.toUpperCase())}
                placeholder="To Currency ie. USD"
            />
            <button onClick={handleConvert}>Convert</button>

            {exchangeRate && ( //Display results
                <div>
                    <p>Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}</p>
                    <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default CurrencyConverter;
