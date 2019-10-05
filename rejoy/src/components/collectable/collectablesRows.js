import React from "react";
import { Link } from "react-router-dom";
import { observer } from "../node_modules/mobx-react";

const CollectablesRow = props => {
  const collectables = props.collectable;

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
      <td>{collectables.item}</td>
      <td>{collectables.owner}</td>
      <td>
        <Link to={`/collectable/list/${collectables.condition}`}>
          <button className="btn" style={{ backgroundColor: blue }} />
        </Link>
      </td>
    </tr>
  );
};

export default observer(CollectablesRow);
