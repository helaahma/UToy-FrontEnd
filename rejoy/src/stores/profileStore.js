import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";
import bidStore from "./bidStore";

class ProfileStore {
  userProfile = null;
  loading = true;

  fetchUserProfile = async () => {
    try {
      const res = await instance.get("userprofile/");
      const profile = res.data;
      this.userProfile = profile;
      this.loading = false;
      console.log("fetched");
    } catch (error) {
      console.log(error);
    }
  };
  UpdateUserProfile = async userData => {
    try {
      const res = await instance.put("userprofile/", userData);
      const profile = res.data;
      this.userProfile = profile;
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(ProfileStore, {
  userProfile: observable,
  loading: observable
});

const profileStore = new ProfileStore();

// remember that you are creating a variable to export it, as you are not export the
// class itself but the object that is being export

export default profileStore;
