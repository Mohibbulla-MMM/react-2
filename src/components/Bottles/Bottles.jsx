import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToLS,
  getStoredCard,
  removeBottleLS,
} from "../localStorage/localStorage";
import BottleCard from "../BottleCard/BottleCard";

const Bottles = () => {
  const [seletedBottle, setSeletedBottle] = useState([]);
  const [bottles, setBottles] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("../../../public/bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // let counter = 0;======================//
  useEffect(() => {
    // counter++
    if (bottles.length) {
      const storedCard = getStoredCard();
      // console.log(bottles.length);
      const saveCard = [];
      for (const id of storedCard) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCard.push(bottle);
        }
      }
      // console.log(saveCard);
      // setSeletedBottle(saveCard);
      setCard(saveCard);
    }
    // console.log(card);
  }, [bottles]);
  const handler = (bottle) => {
    // counter++
    const newitem = bottle.id;
    const newCard = [...card, newitem];
    console.log(newCard);
    setCard(newCard);
    addToLS(bottle.id);
  };
  const removeBottle = (id) => {
    const cardRemoveDataFilter = card.filter((x) => x.id !== id);
    setCard(cardRemoveDataFilter);
    removeBottleLS(id);
    // console.log(id);
  };

  return (
    <div>
      <h3>bottles list </h3>
      <div>
        {
          <BottleCard
            key={card}
            // card={seletedBottle}
            card={card}
            removeBottle={removeBottle}
          ></BottleCard>
        }
      </div>
      <div className="bottle-box">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} handler={handler} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
