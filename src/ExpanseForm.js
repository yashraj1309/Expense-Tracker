import "./ExpanseForm.css";
import { useState } from "react";

function ExpanseForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const ex = {
    id: Math.random(),
    title: title,
    amount: amount,
    date: date
  };
  function add() {
    props.dt(ex);
    setAmount("");
    setDate("");
    setTitle("");
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="Title of Expense"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="number"
        value={amount}
        placeholder="Amount of Expense"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <button type="button" onClick={add}>
        Add
      </button>
    </div>
  );
}

export default ExpanseForm;
