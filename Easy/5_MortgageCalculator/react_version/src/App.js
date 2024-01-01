import { useState } from "react";
import "./App.css";

function App() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(3);
  const [loanLength, setLoanLength] = useState(30);

  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const monthlyRate = (interestRate * 1) / 100 / 12;
    const totalMonths = loanLength * 12;
    // const result =
    //   loanAmount *
    //   ((monthlyRate * (1 + monthlyRate) ** totalMonths) /
    //     (1 + totalMonths) ** totalMonths -
    //     1);

    const result =
      loanAmount *
      ((monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1));
    setResult(result);
  };

  return (
    <section className="section-calc">
      <form>
        <div>
          <p>Principal loan amount</p>
          <input
            type="number"
            placeholder="500000"
            value={loanAmount}
            class="principal-amount"
            onChange={(e) => setLoanAmount(e.target.value)}
          ></input>
        </div>
        <div>
          <p>Interest rate</p>
          <div>
            <input
              type="number"
              placeholder="3"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            ></input>
            <span>%</span>
          </div>
        </div>
        <div>
          <p>Length of Loan</p>
          <div>
            <input
              type="number"
              placeholder="30"
              value={loanLength}
              onChange={(e) => setLoanLength(e.target.value)}
            ></input>
            <span>Years</span>
          </div>
        </div>
        <div>
          <button onClick={(e) => handleSubmit(e)}>Calculate</button>
        </div>
        <div>
          <p>Your monthly mortgage payment will be ${result}</p>
        </div>
      </form>
    </section>
  );
}

export default App;
