import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  status: "",
  withdrawAmount: 0,
  depositAmount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
        isActive: true,
        status: "Account opened",
      };
    case "Deposit":
      return {
        ...state,
        balance: state.balance + state.depositAmount,
        status: "Deposit",
      };
    case "Withdraw":
      return {
        ...state,
        balance: state.balance - state.WithdrawAmount,
        status: "Withdraw",
      };
    case "DepositAmount":
      return {
        ...state,
        depositAmount: action.payload,
        status: "DepositAmount",
      };
    case "WithdrawAmount":
      return {
        ...state,
        WithdrawAmount: action.payload,
        status: "WithdrawAmount",
      };
    case "RequestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: 5000,
        balance: state.balance + state.loan,
        status: "RequestLoan",
      };
    case "PayLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        status: "PayLoan",
      };
    case "Close":
      if (state.loan > 0 && state.balance > 0) return state;
      return {
        ...initialState,
        status: "Close",
      };
    default:
      throw new Error("Action not supported");
  }
}

export default function App() {
  const [{ balance, loan, isActive, withdrawAmount, depositAmount }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive} // Disable the "Open account" button after the account is active
        >
          Open account
        </button>
      </p>

      <p>
        <input
          placeholder="Enter Deposit Amount"
          onChange={(e) =>
            dispatch({ type: "DepositAmount", payload: Number(e.target.value) })
          }
        />
        <button
          onClick={() => {
            dispatch({ type: "Deposit" });
          }}
          disabled={!isActive}
        >
          Deposit
        </button>
      </p>
      <p>
        <input
          placeholder="Enter Deposit Amount"
          onChange={(e) =>
            dispatch({
              type: "WithdrawAmount",
              payload: Number(e.target.value),
            })
          }
        />
        <button
          onClick={() => {
            dispatch({ type: "Withdraw" });
          }}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "RequestLoan" });
          }}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "PayLoan" });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "Close" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
