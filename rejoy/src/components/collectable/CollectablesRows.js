import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import "../../assets/css/font-awesome.min.css";
const CollectablesRow = ({ collectable }) => {
  return (
    <div>
      <div className="box">
        <div className="image fit">
          <img src={collectable.image} alt={collectable.item} />
        </div>
        <div className="content">
          <header className="align-center">
            <strong>{collectable.item}</strong>
          </header>
          <strong>{collectable.desired_price}</strong>
          <strong>{collectable.group}</strong>
          <footer className="align-center">
            <Link to={`/list/${collectable.condition}`}>
              <button className="btn" style={{ backgroundColor: "#FFE4C4" }}>
                <strong>{collectable.condition}</strong>
              </button>
            </Link>
            <br />
            <br />
            <Link to={`/detail/${collectable.id}/`}>
              <button
                className="btn"
                style={{ backgroundColor: "#FFE4C4", color: "white" }}
              >
                <strong>More Details </strong>
              </button>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default observer(CollectablesRow);
