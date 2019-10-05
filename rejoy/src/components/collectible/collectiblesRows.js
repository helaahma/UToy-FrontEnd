import React from "react";
import { Link } from "react-router-dom";
import { observer } from "../node_modules/mobx-react";

const CollectiblesRow = props => {
  const collectibles = props.collectible;

  // const availableButton = (
  //   <button
  //     className={`btn btn-${book.available ? "success" : "danger"}`}
  //     onClick={() => (book.available = !book.available)}
  //   >
  //     {book.available ? "borrow" : "return"}
  //   </button>
  // );
  return (
    <tr>
      <td>{collectibles.item}</td>
      <td>{collectibles.owner}</td>
      <td>
        <Link to={`/collectable/list/${collectibles.condition}`}>
          <button className="btn" style={{ backgroundColor: blue }} />
        </Link>
      </td>
    </tr>
  );
};

export default observer(CollectiblsRow);
