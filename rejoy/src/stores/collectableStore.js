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
    return this.filteredBooks.filter(book => book.condition === cond);
  };

  // handleChange = event => {
  // //   this.setState({ [event.target.name]: event.target.value });
  // };

  portForm = async form => {
    try {
      const res = await instance.post("SellRequest/", form);
      this.collectables.push(res.data);
    } catch (err) {
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
