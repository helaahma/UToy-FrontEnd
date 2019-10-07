import React from "react";

//components
import CollectablesRow from "./CollectablesRows";

const collectableTable = props => {
  const collectableRows = props.collectables.map(collectable => (
    <CollectablesRow key={collectable.id} collectable={collectable} />
  ));
  console.log(props.collectables);

  return (
    <table className="mt-3 table">
      <thead>
        <tr>
          <th />
          <th>item</th>
          <th>group</th>
          <th>target price</th>
          <th>condition</th>
          <th> image</th>
        </tr>
      </thead>
      <tbody>{collectableRows}</tbody>
    </table>
  );
};
export default collectableTable;
