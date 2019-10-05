import { decorate, observable, computed } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const instance = axios.create({
  baseURL: "https://http://127.0.0.1:8000/api/"
});

class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
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

  loginUser = async userData => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      this.setUser(user.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  logout = () => {
    this.setUser();
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
// remember that you are creating a variable to export it, as you are not export the
// class itself but the object that is being export

export default authStore;
