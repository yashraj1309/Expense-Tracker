import ExpanseItem from "./ExpanseItem";
function Expanses(props) {
  return (
    <div>
      {props.expanse.map((item) => (
        <ExpanseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </div>
  );
}

export default Expanses;
