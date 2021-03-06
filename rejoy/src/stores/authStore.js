import { decorate, observable, computed } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";
import profileStore from "./profileStore";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      this.user = jwt_decode(token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("token", token);
      profileStore.fetchUserProfile();
    } else {
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
      localStorage.removeItem("token");
    }
  };

  // setUserToken = token => {
  //   if (token) {
  //     this.user1 = jwt_decode(token);
  //     console.log("gello", this.user1);
  //     instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  //     localStorage.setItem("token", token);
  //     console.log("yeee");
  //   } else {
  //     delete instance.defaults.headers.common.Authorization;
  //     this.user1 = null;
  //     localStorage.removeItem("token");
  //   }
  // };

  signupUser = async userData => {
    try {
      await instance.post("register/", userData);
      this.login(userData);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  login = async (userData, history) => {
    try {
      const res = await instance.post("login/", userData);
      const data = res.data;
      console.log("data access", data.access);
      // this.setUserToken(data.access);
      this.setUser(data.access);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  // fetchUserProfile = async () => {
  //   try {
  //     const res = await instance.get(`userprofile/`);
  //     const profile = res.data;

  //     this.userProfile = profile;
  //     this.loading = false;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  checkForToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };

  logout = () => {
    this.setUser();
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();

// remember that you are creating a variable to export it, as you are not export the
// class itself but the object that is being export

export default authStore;
