import React from "react";
import { observer } from "mobx-react";
import bidStore from "../../stores/bidStore";
import collectableStore from "../../stores/collectableStore";

const ApproveSell = ({ collectableId }) => {
  const handleSubmit = async event => {
    event.preventDefault();
    await bidStore.approveSell(collectableId);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group is-invalid col-md-6"></div>
      <div className="col-md-6">
        <button type="submit" className="btn btn-primary">
          Approve Selling {collectableStore.collectable.item} For:{" "}
          {bidStore.highestBid}{" "}
        </button>
      </div>
    </form>
  );
};

export default observer(ApproveSell);
