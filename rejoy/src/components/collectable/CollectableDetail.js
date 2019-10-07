import React from "react";
import { observer } from "mobx-react";

//components
<<<<<<< HEAD
=======


//stores
import collectableStore from "../../stores/collectableStore";
// import AddCollectableModal from "./AddCollectableModal";

const CollectableDetail = props => {

  const collectableId = props.match.params.id;
  console.log("PROPS>MATCH.PARAMS>ID", collectableId);
  const collectable = collectableStore.getCollectables(collectableId);
  console.log("PROPS>MATCH.PARAMS>IDDD", collectable);

  return (
    <div className="collec">
      <div>
        <h3>{collectable.item}</h3>
        <h3>{collectable.group}</h3>
        <h3>{collectable.description}</h3>
        <img
          src={collectable.image}
          className="img-thumbnail img-fluid"
          alt={collectable.item}
        />
        <h2>{collectable.desired_price}</h2>
        <h2>{collectable.special_features}</h2>
        <h2>{collectable.condition}</h2>
      </div>


      {/* {Collectable.owner && <AddCollectableModal Collectable={Collectable} />} */}
    </div>
  );
};

export default observer(CollectableDetail);
