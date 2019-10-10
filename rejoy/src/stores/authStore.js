import { decorate, observable, computed } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

class AuthStore {
  user = null;

  // setUser = token => {
  //   axios.defaults.headers.common.Authorization = `JWT ${token}`;
  //   const decodedUser = jwt_decode(token);
  //   this.user = decodedUser;
  // };

  setUser = token => {
    if (token) {
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
      localStorage.removeItem("token");
    }
  };

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
      this.setUser(data.access);
      history.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  logout = () => {
    this.setUser();
  };

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
}

decorate(AuthStore, {
  // username: observable,
  // email: observable,
  // // password: observable,
  // The above is already being accessed/retrieved from the user
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();

// remember that you are creating a variable to export it, as you are not export the
// class itself but the object that is being export

export default authStore;
