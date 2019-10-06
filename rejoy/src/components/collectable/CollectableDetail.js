import React from "react";
import { observer } from "mobx-react";

//components
import CollectableTable from "./CollectableTable";
//Add Collectable
//stores
import collectableStore from "../../stores/collectableStore";
// import AddCollectableModal from "./AddCollectableModal";

const CollectableDetail = props => {
  const CollectableId = props.match.params.id;
  const Collectable = collectableStore.getCollectables(CollectableId);
  return (
    <div className="collectable">
      <div>
        <h3>{Collectable.item}</h3>
        <h3>{Collectable.group}</h3>
        <img
          src={Collectable.image}
          className="img-thumbnail img-fluid"
          alt={Collectable.item}
        />
        <h2>{Collectable.desired_price}</h2>
        <h2>{Collectable.special_features}</h2>
        <h2>{Collectable.condition}</h2>
      </div>
      <CollectableTable Collectable={Collectable} />

      {/* {Collectable.owner && <AddCollectableModal Collectable={Collectable} />} */}
    </div>
  );
};

export default observer(CollectableDetail);
