import React, { Component } from "react";
import { observer } from "mobx-react";

//components
import BidPrice from "./bid";
//stores
import collectableStore from "../../stores/collectableStore";
import bidStore from "../../stores/bidStore";
import Loading from "../Loading";
import ApproveSell from "./ApproveSell";
// import AddCollectableModal from "./AddCollectableModal";

class CollectableDetail extends Component {
  async componentDidMount() {
    const collectableId = this.props.match.params.id;
    await collectableStore.fetchCollectable(collectableId);
    const bidID = collectableStore.collectable.bid_order[0].id;
    bidStore.fetchBid(bidID);
  }

  render() {
    if (!collectableStore.collectable) {
      return <Loading />;
    } else {
      const collectable = collectableStore.collectable;
      let HighestBid = bidStore.highestBid;

      return (
        <div className="collec">
          <div>
            <h3>Collectable: {collectable.item}</h3>
            <h3>Group: {collectable.group}</h3>
            <h3>Discription: {collectable.description}</h3>
            <img
              src={collectable.image}
              className="img-thumbnail img-fluid"
              alt={collectable.item}
            />
            <h2>Desired price: {collectable.desired_price}</h2>
            <h2>Special features: {collectable.special_features}</h2>
            <h2>Condition: {collectable.condition}</h2>
            <h2>
              Highest bid:
              {bidStore.statusMessage
                ? `${bidStore.statusMessage}`
                : `  ${HighestBid}`}
            </h2>
            {collectableStore.collectable.owner.username ? (
              <ApproveSell collectableId={collectable.id} />
            ) : (
              <BidPrice collectableId={collectable.id} />
            )}
          </div>

          {/* {Collectable.owner && <AddCollectableModal Collectable={Collectable} />} */}
        </div>
      );
    }
  }
}

export default observer(CollectableDetail);
