import "./ExpanseItem.css";
function ExpanseItem(props) {
  return (
    <div className="container">
      <div className="title">{props.title}</div>
      <div className="price">&#x20B9; {props.amount}</div>
      <div className="date">{props.date.toString()}</div>
    </div>
  );
}

export default ExpanseItem;
