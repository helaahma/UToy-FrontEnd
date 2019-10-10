import React, { useState } from "react";
import { observer } from "mobx-react";

//Stores
import bidStore from "../../stores/bidStore";

const BidPrice = ({ collectable }) => {
  //   const BidId = props.match.params.id;
  //   const bid = bidStore.getBidById(BidId);

  const [counter, setCounter] = useState(collectable.desired_price);

  const increment = () => {
    setCounter(counter + 5);
  };

  const decrement = () => {
    setCounter(counter - 5);
  };
  const handleSubmit = event => {
    event.preventDefault();
    bidStore.createBid(collectable.id, { price: counter });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <button onClick={increment} className="btn btn-danger">
          +
        </button>
        <p className="inline">{counter}</p>
        <button onClick={decrement} className="btn btn-danger">
          -
        </button>
      </div>
    </form>
  );
};

export default observer(BidPrice);
