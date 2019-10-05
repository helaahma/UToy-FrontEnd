import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";

class CollectableStore {
  collectables = [];
  loading = true;
  query = "";

  fetchCollectables = async () => {
    try {
      const res = await instance.get("/collectable/list/");
      this.collectables = res.data;
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
    return this.filteredBooks.filter(book => book.condition === cond);
  };
}
decorate(CollectableStore, {
  collectables: observable,
  loading: observable,
  query: observable,
  filteredCollectables: computed
});

const collectableStore = new CollectableStore();
collectableStore.fetchAllPost();
export default collectableStore;
