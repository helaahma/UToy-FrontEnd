import React, { Component } from "react";
import { observer } from "mobx-react";

//components
import BidPrice from "./bid";
//stores
import collectableStore from "../../stores/collectableStore";
import bidStore from "../../stores/bidStore";
import Loading from "../Loading";
import ApproveSell from "./ApproveSell";
import authStore from "../../stores/authStore";
import "../../assets/css/detailmain.css";
// import AddCollectableModal from "./AddCollectableModal";

class CollectableDetail extends Component {
  async componentDidMount() {
    const collectableId = this.props.match.params.id;
    await collectableStore.fetchCollectable(collectableId);
    console.log(collectableStore.collectable);
    const bidID = collectableStore.collectable.bid_order[0];

    if (bidID) {
      bidStore.fetchBid(bidID.id);
    }
  }

  checkLogged = () => {
    if (authStore.user) {
      if (collectableStore.collectable.owner.id === authStore.user.user_id) {
        console.log("True in check");
        return true;
      }
    }
    console.log("false in check");
    return false;
  };

  render() {
    if (!collectableStore.collectable) {
      return <Loading />;
    } else {
      console.log("user", authStore.user);
      console.log("owner", collectableStore.collectable.owner);
      const collectable = collectableStore.collectable;
      let HighestBid = bidStore.highestBid;
      console.log(collectable.owner.username, "collect");
      return (
        <div className="box">
          <div className="image fit">
            <img src={collectable.image} alt={collectable.item} />
          </div>
          <div className="content">
            <header className="align-center">
              <h3>Collectable: {collectable.item}</h3>

              <p>Group: {collectable.group}</p>
            </header>
            <hr />
            <p>Discription: {collectable.description} </p>
            <p>Desired price: {collectable.desired_price}</p>
            <p>Special features: {collectable.special_features}</p>
            <p> Condition: {collectable.condition} </p>
            <p>
              Highest bid:
              {bidStore.statusMessage
                ? `${bidStore.statusMessage}`
                : `  ${HighestBid}`}
            </p>
            <hr />
          </div>

          <ul className="actions align-center">
            <li>
              {this.checkLogged() ? (
                <ApproveSell collectableId={collectable.id} />
              ) : (
                <BidPrice
                  collectableId={collectable.id}
                  history={this.props.history}
                />
              )}
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default observer(CollectableDetail);
