import React, { useState } from "react";

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
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Currency Converter</h1>
            <div>
                <label>
                    Amount in PLN:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount in PLN"
                        style={{ margin: "10px", padding: "5px" }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Select currency:
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        style={{ margin: "10px", padding: "5px" }}
                    >
                        {Object.keys(ExchangeRates).map((cur) => (
                            <option key={cur} value={cur}>
                                {cur}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button
                onClick={handleConvert}
                style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                }}
            >
                Convert
            </button>
            {result && (
                <h2 style={{ marginTop: "20px", color: "#333" }}>
                    Result: {result}
                </h2>
            )}
        </div>
    );
}

export default App;
