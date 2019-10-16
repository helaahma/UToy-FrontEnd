import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";
import bidStore from "./bidStore";

class CollectableStore {
  collectables = [];
  collectable = null;
  loading = true;
  query = "";

  fetchCollectables = async () => {
    try {
      const res = await instance.get("collectable/list/");
      const collectables = res.data;
      this.collectables = collectables;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  fetchCollectable = async collectableId => {
    try {
      const res = await instance.get(`collectable/detail/${collectableId}/`);
      const collectable = res.data;
      this.collectable = collectable;
      bidStore.highestBid = collectable.bid_order[0].price;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
  get filteredCollectables() {
    console.log("QUERY", this.query);
    const coll = this.collectables.filter(collectable => {
      return collectable.item.toLowerCase().includes(this.query.toLowerCase());
    });
    console.log("COLLLL", coll);
    return coll;
  }

  getCollectables = id => {
    return this.collectables.find(collectable => +collectable.id === +id);
  };
  getCollectableByCond = cond => {
    return this.filteredCollectables.filter(coll => coll.condition === cond);
  };

  postForm = async (form, history) => {
    try {
      const res = await instance.post("sellrequest/", form, {
        headers: {
          "content-type": "multipart/form-data"
        }
      });
      const resData = res.data;
      this.collectables.push(resData);
      history.replace("/");
    } catch (err) {
      console.error(err.response.data);
      this.statusMessage = err;
    }
  };
}

decorate(CollectableStore, {
  collectables: observable,
  collectable: observable,
  loading: observable,
  query: observable,
  filteredCollectables: computed
});

const collectableStore = new CollectableStore();
collectableStore.fetchCollectables();
export default collectableStore;
