import React from "react";

//components
import CollectablesRow from "./collectablesRows";

const collectableTable = props => {
  const collectableRows = props.collectables.map(collectable => (
    <CollectablesRow key={collectable.id} collectable={collectable} />
  ));

  return (
    <table className="mt-3 table">
      <thead>
        <tr>
          <th />
          <th>item</th>
          <th>target price</th>
          <th>condition</th>
        </tr>
      </thead>
      <tbody>{collectableRows}</tbody>
    </table>
  );
};
export default collectableTable;
