import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";

class BidStore {
  bids = [];
  highestBid = null;
  newBid = null;
  loading = true;

  fetchHighestBid = async BidId => {
    console.log("BIIIIID", BidId);
    try {
      const res = await instance.get(`bid/${BidId}/`);
      const bid = res.data;
      console.log("[bidStore.js], bid: ", bid);
      this.highestBid = bid;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createBid = async (collectable, price) => {
    console.log("BID", collectable);
    try {
      const res = await instance.post(`bid/${collectable}/`, price);
      const resData = res.data;
      this.price = resData;
      this.loading = false;
    } catch (err) {
      console.error(err.response.data);
      this.statusMessage = err;
    }
  };
  getBidById = id => {
    return this.bids.find(bid => +bid.id === +id);
  };
}
decorate(BidStore, {
  bids: observable,
  loading: observable,
  price: observable
});
const bidStore = new BidStore();
export default bidStore;
