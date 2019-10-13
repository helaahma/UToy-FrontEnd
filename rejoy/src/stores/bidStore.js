import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";

class BidStore {
  bids = [];
  highestBid = null;
  loading = true;
  statusMessage = null;

  fetchBid = async bidID => {
    try {
      const res = await instance.get(`bid/detail/${bidID}`);
      const bid = res.data;
      console.log("[bidStore.js], bid: ", bid);
      this.bids = bid;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createBid = async (collectableID, price) => {
    console.log("BID", collectableID);
    try {
      await instance.post(`bid/${collectableID}/`, price);
      this.highestBid = price;
    } catch (err) {
      console.error(err.response.data.highest_bid);
      this.statusMessage = err.response.data.highest_bid;
    }
  };
  getBidById = id => {
    return this.bids.find(bid => +bid.id === +id);
  };
}
decorate(BidStore, {
  bids: observable,
  loading: observable,
  highestBid: observable,
  statusMessage: observable
});
const bidStore = new BidStore();
export default bidStore;
