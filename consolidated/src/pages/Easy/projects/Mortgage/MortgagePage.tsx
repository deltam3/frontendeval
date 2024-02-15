import React, { useState, useEffect } from "react";
import Button from "../../../../components/Button";

const MortgagePage = () => {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(3);
  const [loanLength, setLoanLength] = useState<number>(30);

  const [result, setResult] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const monthlyRate = (interestRate * 1) / 100 / 12;
    const totalMonths = loanLength * 12;

    const result =
      loanAmount *
      ((monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1));

    setResult(Math.floor(result));
  };

  useEffect(() => {
    const monthlyRate = (interestRate * 1) / 100 / 12;
    const totalMonths = loanLength * 12;

    const result =
      loanAmount *
      ((monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1));

    setResult(Math.floor(result));
  }, []);

  return (
    <section className="text-center">
      <form>
        <h2 className="text-3xl">Mortgage Calculator</h2>
        <div className="flex justify-center gap-2">
          <p className="text-2xl">Principal loan amount : </p>
          <p>$</p>
          <input
            type="number"
            placeholder="500000"
            value={loanAmount}
            className="principal-amount"
            onChange={(e) => setLoanAmount(+e.target.value)}
          ></input>
        </div>
        <div className="flex justify-center align-middle gap-2">
          <p className="text-2xl">Interest rate : </p>
          <div>
            <input
              type="number"
              placeholder="3"
              value={interestRate}
              onChange={(e) => setInterestRate(+e.target.value)}
            ></input>
            <span>%</span>
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <p className="text-2xl">Length of Loan : </p>
          <div>
            <input
              type="number"
              placeholder="30"
              value={loanLength}
              onChange={(e) => setLoanLength(+e.target.value)}
            ></input>
            <span>Years</span>
          </div>
        </div>
        <div>
          <Button primary onClick={handleSubmit}>
            Calculate
          </Button>
        </div>
        <div>
          <p className="text-4xl">
            Your monthly mortgage payment will be ${result}
          </p>
        </div>
      </form>
    </section>
  );
};

export default MortgagePage;
