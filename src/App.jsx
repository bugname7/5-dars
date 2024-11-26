import React from "react";
import "./App.css";
import "./font.css";
import prefix from "./assets/images/prefix.svg";
import calc from "./assets/images/calc.svg";

function App() {
  return (
    <div className="block">
      <div className="wrap">
        <div className="container">
          <div className="wrap-block">
            <div className="card-left">
              <div className="main">
                <h2>Mortgage Calculator</h2>
                <a href="#">Clear All</a>
              </div>
              <label id="amount" htmlFor="money">
                Mortgage Amount
              </label>
              <br />
              <div className="money-input">
                <img src={prefix} alt="prefix image" />
                <input type="number" id="money" />
              </div>

              <div className="year">
                <div className="year-left">
                  <label id="year" htmlFor="year">
                    Mortgage Term
                  </label>
                  <br />
                  <div className="month">
                    <input type="number" id="day" />
                    <span className="icon">year</span>
                  </div>
                </div>
                <div className="year-left">
                  <label id="year" htmlFor="year">
                    Mortgage Rate
                  </label>
                  <br />
                  <div className="month">
                    <input type="number" id="day" />
                    <span className="icon2">%</span>
                  </div>
                </div>
              </div>

              <div className="type">
                <h4>Mortgage Type</h4>
                <form class="styled-form">
                  <div class="radio-group">
                    <input type="radio" id="repayment" name="payment" />
                    <label for="repayment">Repayment</label>
                  </div>
                  <div class="radio-group">
                    <input type="radio" id="interest" name="payment" />
                    <label for="interest">Interest Only</label>
                  </div>
                </form>
                <button id="btn">
                  <img src={calc} alt="calculyator image" />
                  <span>Calculate Repayments</span>
                </button>
              </div>
            </div>
            <div className="card-right">
              <h2> Your results</h2>
              <p>
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                “calculate repayments” again.
              </p>
              <div className="info-money">
                <span>Your monthly repayments</span>
                <h1>£1,797.74</h1>
                <p> Total you'll repay over the term</p>
                <h4>£539,322.94</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
