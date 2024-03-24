import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [number, setNumber] = useState("0");
  const [sum, setSum] = useState("");

  // Function to calculate the expression
  const calculate = () => {
    try {
      // Remove any commas from the expression for evaluation
      const expression = number.replace(/,/g, '');
      const result = eval(expression); // Using eval() for simplicity (be cautious with eval in production)
      setSum(result.toLocaleString()); // Format the result with commas
    } catch (error) {
      setSum("Error"); // Display "Error" if there's an issue with the expression
    }
  };

  // Calculate the result whenever the number state changes
  useEffect(() => {
    calculate();
  }, [number]);

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
          <div className="text-gray-700">{number}</div>
          <div className="text-black font-bold text-3xl">{sum}</div>
        </div>
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <div className="btn-yellow" onClick={() => setNumber("")}>C</div>
            <div className="btn-grey" onClick={() => setNumber(prev => prev + "(")}>(</div>
            <div className="btn-grey" onClick={() => setNumber(prev => prev + ")")}>)</div>
            <div className="btn-orange" onClick={() => setNumber(prev => prev + "/")}>/</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className="btn-grey" onClick={() => setNumber(prev => prev + "7")}>7</div>
            <div className="btn-grey" onClick={() => setNumber(prev => prev + "8")}>8</div>
            <div className="btn-grey" onClick={() => setNumber(prev => prev + "9")}>9</div>
            <div className="btn-orange" onClick={() => setNumber(prev => prev + "*")}>x</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className="btn-grey" onClick={() => setNumber(prev => prev + "4")}>4</div>
            <div className="btn-grey" onClick={() => setNumber(prev => prev + "5")}>5</div>
            <div className="btn-grey" onClick={() => setNumber(prev => prev + "6")}>6</div>
            <div className="btn-orange" onClick={() => setNumber(prev => prev + "-")}>-</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className="btn-grey" onClick={() => setNumber(prev => prev + "1")}>1</div>
            <div className="btn-grey" onClick={() => setNumber(prev => prev + "2")}>2</div>
            <div className="btn-grey" onClick={() => setNumber(prev => prev + "3")}>3</div>
            <div className="btn-orange" onClick={() => setNumber(prev => prev + "+")}>+</div>
          </div>
          <div className="m-2 flex justify-between">
            <div className="btn-grey-jumbo" onClick={() => setNumber(prev => prev + "0")}>0</div>
            <div className="flex w-full ml-3 justify-between">
              <div className="btn-grey" onClick={() => setNumber(prev => prev + ".")}>,</div>
              <div className="btn-green" onClick={calculate}>=</div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
