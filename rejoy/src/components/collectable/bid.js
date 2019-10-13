import React, { useState } from "react";
import { observer } from "mobx-react";

//Stores
import bidStore from "../../stores/bidStore";

const BidPrice = ({ collectableId }) => {
  //   const BidId = props.match.params.id;
  //   const bid = bidStore.getBidById(BidId);

  const [counter, setCounter] = useState(bidStore.highestBid);

  const handleSubmit = async event => {
    event.preventDefault();
    await bidStore.createBid(collectableId, { price: counter });
    console.log("[bid.js] statusMessage:", bidStore.statusMessage);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group is-invalid col-md-6">
        <input
          type="number"
          className="form-control is-invalid"
          id="validationServer05"
          value={counter}
          min={bidStore.highestBid}
          step="5"
          onChange={e => setCounter(e.target.value)}
          required
        />
        <div className="invalid-feedback">
          {bidStore.statusMessage &&
            `The Current Bid is ${bidStore.statusMessage}`}
        </div>
      </div>
      <div className="col-md-6">
        <button type="submit" className="btn btn-primary">
          New bid
        </button>
      </div>
    </form>
  );
};

export default observer(BidPrice);
