import "./bottleCard.css";
const BottleCard = ({ card, removeBottle }) => {
  const handlerCardItemAllRemove = () => {
    localStorage.clear();
    history.go(0);
  };
  // console.log(card);

  const bottleStyle = {
    width: "100px",
    margin: "5px",
    border: "1px solid tomato",
    minHeight: "100px",
  };

  return (
    <div>
      <p>card {card.length}</p>

      <button onClick={handlerCardItemAllRemove}>All item remove</button>
      <br />
      <br />
      <div className="bottle-grid-4">
        {card.map((bottle, i) => (
          <div className="bttle-flex " key={i}>
            <img src={bottle.img} style={bottleStyle}></img>
            <button onClick={() => removeBottle(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottleCard;
