import React from "react";
import { observer } from "mobx-react";

//components
import collectibleTable from "./collectiblleTable";
//Add collectible
//stores
import collectibleStore from "../../stores/collectableStore";
import AddCollectibleModal from "./AddCollectibleModal";

const collectibleDetail = props => {
  const id = props.match.params.id;
  const collectible = collectableStore.getCollectables(id);
  return (
    <div className="collectable">
      <div>
        <h3>{collectible.item}</h3>
        <h3>{collectible.group}</h3>
        <img
          src={collectible.image}
          className="img-thumbnail img-fluid"
          alt={collectible.item}
        />
        <h2>{collectible.desired_price}</h2>
        <h2>{collectible.special_features}</h2>
        <h2>{collectible.condition}</h2>
      </div>
      <collectibleTable collectible={collectible} />
      {collectible.owner && <AddCollectibleModal collectible={collectible} />}
    </div>
  );
};

export default observer(collectibleDetail);
