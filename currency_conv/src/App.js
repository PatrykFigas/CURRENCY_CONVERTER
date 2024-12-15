import React, { useState } from "react";
import './App.css';

// Exchange rates - you can modify or fetch them dynamically from an API
const ExchangeRates = {
    USD: 4.5,
    EUR: 4.8,
    GBP: 5.3,
    HUF: 0.012,
    CZK: 0.19,
};

function App() {
    const [amount, setAmount] = useState(""); // Amount in PLN
    const [currency, setCurrency] = useState("USD"); // Default currency
    const [result, setResult] = useState(null); // Conversion result

    // Function to handle currency conversion
    const handleConvert = () => {
        if (!amount || isNaN(amount)) {
            alert("Please enter a valid amount!");
            return;
        }
        const rate = ExchangeRates[currency];
        const convertedAmount = (amount / rate).toFixed(2);
        setResult(`${amount} PLN is equal to ${convertedAmount} ${currency}`);
    };

    return (
        <div className="app-container">
            <h1>Currency Converter</h1>
            <div>
                <label>
                    Amount in PLN:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount in PLN"
                    />
                </label>
            </div>
            <div>
                <label>
                    Select currency:
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        {Object.keys(ExchangeRates).map((cur) => (
                            <option key={cur} value={cur}>
                                {cur}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button onClick={handleConvert}>
                Convert
            </button>
            {result && (
                <div className="result">
                    Result: {result}
                </div>
            )}
        </div>
    );
}

export default App;
