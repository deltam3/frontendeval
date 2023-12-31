import React from "react";

function App() {
  let totalAmount = 2108;
  return (
    <section>
      <form>
        <div>
          <p>Principal loan amount</p>
          <input
            type="number"
            placeholder="500000"
            class="principal-amount"
          ></input>
        </div>
        <div>
          <p>Interest rate</p>
          <div>
            <input type="number" placeholder="3"></input>
            <span>%</span>
          </div>
        </div>
        <div>
          <p>Length of Loan</p>
          <div>
            <input type="number" placeholder="30"></input>
            <span>Years</span>
          </div>
        </div>
        <div>
          <button>Calculate</button>
        </div>
        <div>
          <p>Your monthly mortgage payment will be ${totalAmount}</p>
        </div>
      </form>
    </section>
  );
}

export default App;
