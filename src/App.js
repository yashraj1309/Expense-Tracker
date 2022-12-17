import ExpanseForm from "./ExpanseForm";
import { useState, useEffect } from "react";
import Expanses from "./Expanses";
import "./styles.css";

const LOCAL_STORAGE_KEY = "yashraj";
const ex = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

export default function App() {
  const [expanse, setExpanse] = useState([]);
  const [show, setShow] = useState(false);
  function getEx(data) {
    setExpanse((prevExpenses) => {
      return [data, ...prevExpenses];
    });
  }
  useEffect(() => {
    setExpanse(ex || []);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expanse));
  }, [expanse]);
  const [exbtn, setBtn] = useState("Add Expanse");
  function change() {
    show ? setShow(false) : setShow(true);
    exbtn === "Add Expanse"
      ? setBtn("Close Add Expanse Form")
      : setBtn("Add Expanse");
  }
  function remove() {
    setExpanse([]);
  }
  return (
    <div className="con">
      <header>
        <h1>Expanse Tracker</h1>
      </header>
      <button onClick={change}>{exbtn}</button> <br />
      <button onClick={remove} className="rmbtn">
        Remove Expanse
      </button>
      {show && <ExpanseForm dt={getEx} />}
      <Expanses expanse={expanse} />
    </div>
  );
}
