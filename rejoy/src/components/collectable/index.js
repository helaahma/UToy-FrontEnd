import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import "../../assets/css/main.css";
import Rejoy from "../../assets/Rejoy.png";
import "../../assets/css/font-awesome.min.css";

//stores
import collectableStore from "../../stores/collectableStore";
//components

import CollectableTable from "./CollectableTable";

import Loading from "../Loading";
import SearchBar from "../SearchBar";

class CollectableList extends Component {
  handleSearch = query => {
    collectableStore.query = query;
  };
  render() {
    const collectableCond = this.props.match.params.collectableCond;
    let collectables = collectableStore.filteredCollectables;
    let allCollectablesButton;
    if (collectableCond) {
      collectables = collectableStore.getCollectableByCond(collectableCond);
      allCollectablesButton = (
        <Link to="/list">
          <button className="btn">Collectables List</button>
        </Link>
      );
    }
    if (collectableStore.loading) {
      return <Loading />;
    } else {
      return (
        <>
          <section id="one" className="wrapper style2">
            <div className="inner">
              <div className="grid-style"></div>
              <div>
                <div className="box">
                  <div className="image fit">
                    <img
                      src={Rejoy}
                      alt=""
                      style={{ height: "400px", width: "400px" }}
                    />
                  </div>
                  <div className="content">
                    <header className="align-center">
                      <p>Collectables</p>
                      <SearchBar store={collectableStore} />
                    </header>

                    <footer className="align-center"></footer>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {allCollectablesButton}
          <CollectableTable collectables={collectables} />
        </>
      );
    }
  }
}
export default observer(CollectableList);
