import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";

class CollectableStore {
  collectables = [];
  loading = true;
  query = "";

  fetchCollectables = async () => {
    try {
      const res = await instance.get("collectable/list/");
      const collectables = res.data;
      console.log("[collectablesStore.js], collectables: ", collectables);
      this.collectables = collectables;
      this.loading = false;
      console.log("STORE", this.collectables);
    } catch (error) {
      console.log(error);
    }
  };

  get filteredCollectables() {
    return this.collectables.filter(collectable => {
      return collectable.item.toLowerCase().includes(this.query.toLowerCase());
    });
  }

  getCollectables = id => {
    return this.collectables.find(collectable => +collectable.id === +id);
  };
  getCollectableByCond = cond => {
    return this.filteredCollectables.filter(coll => coll.condition === cond);
  };

  postForm = async form => {
    try {
      const res = await instance.post("sellrequest/", form);
      const resData = res.data;
      this.collectables.push(resData);
    } catch (err) {
      console.error(err.response.data);
      this.statusMessage = err;
    }
  };
}

decorate(CollectableStore, {
  collectables: observable,
  loading: observable,
  query: observable,
  filteredCollectables: computed
});

const collectableStore = new CollectableStore();
collectableStore.fetchCollectables();
export default collectableStore;
