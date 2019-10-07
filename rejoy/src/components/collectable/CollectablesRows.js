import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const CollectablesRow = props => {
  const collectables = props.collectable;

  console.log("[CollectablesRows.js], collectables: ", collectables.id);

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
      <td>{collectables.group}</td>
      <td>{collectables.owner}</td>
      <td>{collectables.desired_price}</td>
      <td>
        <Link to={`/list/${collectables.condition}`}>
          <button className="btn" style={{ backgroundColor: "#FFE4C4" }}>
            {" "}
            {collectables.condition}
          </button>
        </Link>
      </td>
      <td>
        <img
          src={collectables.image}
          className="img-thumbnail img-fluid"
          alt={collectables.item}
        />
      </td>
      <td>
        <Link to={`/detail/${collectables.id}/`}>
          <button className="btn btn-danger"> More Details </button>
        </Link>
      </td>
    </tr>
  );
};

export default observer(CollectablesRow);
