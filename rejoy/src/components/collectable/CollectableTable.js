import React from "react";

//components
import CollectablesRow from "./CollectablesRows";
import collectableStore from "../../stores/collectableStore";
import "../../assets/css/font-awesome.min.css";

const collectableTable = () => {
  const collectableRows = collectableStore.filteredCollectables.map(
    collectable => (
      <CollectablesRow key={collectable.id} collectable={collectable} />
    )
  );

  return (
    <section id="one" class="wrapper style2">
      <div class="inner">
        <div class="grid-style">{collectableRows}</div>
      </div>
    </section>
  );
};
export default collectableTable;
