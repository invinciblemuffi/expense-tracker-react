import "./App.css";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseView from "./components/ExpenseView";

function App() {
  const [expData, setExpData] = useState([]);
  const setExpenseData = (data) => {
    setExpData(data);
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1 className="my-5 text-center text-warning bg-light p-3 rounded">
            Expense Tracker App
          </h1>
          <ExpenseForm expData={expData} setExpenseData={setExpenseData} />
          <ExpenseView expData={expData} />
        </div>
      </div>
    </div>
  );
}

export default App;
