import React from "react";
import { Image, TouchableHighlight, StyleSheet } from "react-native";
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
  Right
} from "native-base";

import React from "react";
//components
import CollectiblesRow from "./collectiblesRows";

export default collectableTable = props => {
  const collectibleRows = props.collectibles.map(collectible => {
    <CollectiblesRow key={collectible.id} collectible={collectible} />;
  });

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
      <tbody>{collectibleRows}</tbody>
    </table>
  );
};
export default collectableTable