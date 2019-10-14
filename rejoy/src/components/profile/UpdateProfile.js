import { decorate, observable, action, computed } from "mobx";
import profileStore from "../../stores/profileStore";

const ProfileUpdate = event => {
  const handleSubmit = async event => {
    event.preventDefault();
    profileStore.UpdateUserProfile(event);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group is-invalid col-md-6">
        <input
          type="text"
          className="form-control"
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
