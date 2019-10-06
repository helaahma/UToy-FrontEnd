import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//stores
import collectableStore from "../../stores/collectableStore";
//components
import CollectiblleTable from "./CollectablleTable";
import Loading from "../Loading";
import SearchBar from "../SearchBar";

class CollectableList extends Component {
  handleSearch = query => {
    collectableStore.query = query;
  };
  render() {
    console.log("PROPS", this.props);

    const collectableCond = this.props.match.params.collectableCond;
    console.log("[Collectable, index.js] collectablesId: ", collectableCond);
    let collectables;
    let allCollectablesButton;
    if (!collectableCond) {
      collectables = collectableStore.collectables;
    } else {
      collectables = collectableStore.getCollectableByCond(collectableCond);
      allCollectablesButton = (
        <Link to="/list">
          <button className="btn">Collectables List</button>
        </Link>
      );
    }
    if (collectableStore.loading) {
      return <Loading />;
    } else {
      return (
        <div className="books">
          <h3>collectables</h3>
          <SearchBar store={collectableStore} />
          {allCollectablesButton}
          <CollectiblleTable collectables={collectables} />
        </div>
      );
    }
    // let card = collectableStore.filteredcollectables.map(collectable => {
    //   return <Card key={collectable.id} collectable={collectable} />;
    // });
  }
}
export default observer(CollectableList);
