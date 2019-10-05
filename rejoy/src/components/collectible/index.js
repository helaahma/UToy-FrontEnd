import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Footer,
  Input,
  Form,
  Item,
  Spinner
} from "native-base";
//stores
import collectableStore from "../../stores/collectableStore";
import authStore from "../../stores/authSore";
//components
import Card from "./collectiblleTable";
import Loading from "../Loading";

class CollectableList extends Component {
  handleSearch = query => {
    collectableStore.query = query;
  };
  render() {
    const collectableCond = this.props.match.params.condition;
    console.log("[collectible, index.js] collectablesId: ", collectableCond);
    let collectables;
    let allCollectablesButton;
    if (!collectableCond) {
      books = bookStore.filteredBooks;
    } else {
      books = collectableStore.getCollectableByCond(collectableCond);
      allCollectablesButton = (
        <Link to="/collectable/list/">
          <button className="btn">Collectables List</button>
        </Link>
      );
    }
    if (collectableStore.loading) {
      return (
        <Container style={styles.container}>
          <Loading />
        </Container>
      );
    } else {
      <div className="books">
        <h3>collectables</h3>
        <SearchBar store={collectableStore} />
        {allCollectablesButton}
        <collectableTable collectables={collectables} />
      </div>;
    }
    // let card = collectableStore.filteredcollectables.map(collectable => {
    //   return <Card key={collectable.id} collectable={collectable} />;
    // });
  }
}
export default observer(CollectableList);
