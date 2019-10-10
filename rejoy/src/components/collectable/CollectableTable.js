import React from "react";

//components
import CollectablesRow from "./CollectablesRows";

const collectableTable = props => {
  const collectableRows = props.collectables.map(collectable => (
    <CollectablesRow key={collectable.id} collectable={collectable} />
  ));

  return (
    <table className="mt-3 table">
      <thead>
        <tr>
          <th>item</th>
          <th>group</th>
          <th>Owner</th>
          <th>desired price</th>
          <th>condition</th>
          <th> image</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>{collectableRows}</tbody>
    </table>
  );
};
export default collectableTable;
