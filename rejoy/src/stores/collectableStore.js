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
      this.collectables = collectables;
      this.loading = false;
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
  loading: observable,
  query: observable,
  filteredCollectables: computed
});

const collectableStore = new CollectableStore();
collectableStore.fetchCollectables();
export default collectableStore;
