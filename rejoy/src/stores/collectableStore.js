import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";
import React, { Component } from "react";

class CollectableStore {
  collectables = [];
  loading = true;
  query = "";

  fetchAllCollectables = async () => {
    try {
      const res = await instance.get("/");
    } catch (error) {
      console.log(error);
    }
  };

  getWatch = collectableId => {
    return this.collectables.find(
      collectable => +collectable.id === +collectableId
    );
  };
  
decorate(WatchStore, {
    collectables: observable,
    loading: observable,
    query: observable,
});
}

const collectableStore = new CollectableStore();
collectableStore.fetchAllPost();
export default collectableStore;

