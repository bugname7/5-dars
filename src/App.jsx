import React, { useState } from "react";
import "./App.css";
import "./font.css";
import prefix from "./assets/images/prefix.svg";
import calc from "./assets/images/calc.svg";

function App() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [rate, setRate] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState();
  const [totalPayment, setTotalPayment] = useState();

  const calculateRate = (years) => {
    if (years <= 5) return 3;
    if (years <= 10) return 4;
    if (years <= 20) return 5;
    return 5.5;
  };

  const calculateMortgage = () => {
    const principal = parseFloat(amount);
    const termYears = parseInt(years);
    const annualRate = rate / 100;
    const months = termYears * 12;

    if (principal && termYears) {
      const monthlyRate = annualRate / 12;
      const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      const totalRepayment = emi * months;

      setMonthlyPayment(emi.toFixed(2));
      setTotalPayment(totalRepayment.toFixed(2));
    } 
  };

  const handleYearsChange = (value) => {
    setYears(value);
    const calculatedRate = calculateRate(value);
    setRate(calculatedRate);
  };

  return (
    <div className="block">
      <div className="wrap">
        <div className="container">
          <div className="wrap-block">
            <div className="card-left">
              <div className="main">
                <h2>Mortgage Calculator</h2>
                <a
                  href="#"
                  onClick={() => {
                    setAmount("");
                    setYears("");
                    setRate(0);
                    setMonthlyPayment(null);
                    setTotalPayment(null);
                  }}
                >
                  Clear All
                </a>
              </div>
              <label id="amount" htmlFor="money">
                Mortgage Amount
              </label>
              <br />
              <div className="money-input">
                <img src={prefix} alt="prefix image" />
                <input
                  type="number"
                  id="money"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="summa"
                />
              </div>

              <div className="year">
                <div className="year-left">
                  <label id="year" htmlFor="year">
                    Mortgage Term
                  </label>
                  <br />
                  <div className="month">
                    <input
                      type="number"
                      id="day"
                      value={years}
                      onChange={(e) => handleYearsChange(e.target.value)}
                      placeholder="year"
                    />
                  </div>
                </div>
                <div className="year-left">
                  <label id="year" htmlFor="year">
                    Mortgage Rate
                  </label>
                  <br />
                  <div className="month">
                    <input type="text" id="rate" value={`${rate}%`} readOnly placeholder="%" />
                  </div>
                </div>
              </div>

              <div className="type">
                <h4>Mortgage Type</h4>
                <form className="styled-form">
                  <div className="radio-group">
                    <input type="radio" id="repayment" name="payment" />
                    <label htmlFor="repayment">Repayment</label>
                  </div>
                  <div className="radio-group">
                    <input type="radio" id="interest" name="payment" />
                    <label htmlFor="interest">Interest Only</label>
                  </div>
                </form>
                <button id="btn" onClick={calculateMortgage}>
                  <img src={calc} alt="calculyator image" />
                  <span>Calculate Repayments</span>
                </button>
              </div>
            </div>
            <div className="card-right">
              <h2>Your results</h2>
              <p>
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                “calculate repayments” again.
              </p>
              <div className="info-money">
                {monthlyPayment && totalPayment ? (
                  <>
                    <span>Your monthly repayments</span>
                    <h1>£{monthlyPayment}</h1>
                    <p>Total you'll repay over the term</p>
                    <h4>£{totalPayment}</h4>
                  </>
                ) : (
                  <span>Enter details to see results</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
