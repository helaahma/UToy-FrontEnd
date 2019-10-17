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
          <div>
            <h3 className="text-align-center">
              <strong>
                <tr>
                  Name:{"  "}
                  <span className="badge badge-secondary">
                    {collectable.item}
                  </span>
                </tr>
              </strong>
            </h3>
            <h3 className="text-align-center">
              <strong>
                <tr>
                  Desired price: {"  "}
                  <span className="badge badge-primary">
                    {collectable.desired_price}
                  </span>
                  {"  "}
                  KWD
                </tr>
              </strong>
            </h3>
            <h3 className="text-align-center">
              <strong>
                <tr>
                  Group:{"  "} {collectable.group}
                </tr>
              </strong>
            </h3>
            <h3>
              <strong>
                <tr>
                  condition:{"  "}
                  <Link to={`/list/${collectable.condition}`}>
                    <span className="badge badge-primary">
                      {collectable.condition}
                    </span>
                  </Link>
                </tr>
              </strong>
            </h3>
            <footer className="align-center">
              <br />
              <br />
              <Link to={`/detail/${collectable.id}/`}>
                <button
                  className="btn"
                  style={{ backgroundColor: "#FFE4C4", fontcolor: "white" }}
                >
                  <strong>More Details </strong>
                </button>
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(CollectablesRow);
