import React, { Component } from "react";
import { observer } from "mobx-react";

//components
import authStore from "../../stores/authStore";
//stores
import collectableStore from "../../stores/collectableStore";
import bidStore from "../../stores/bidStore";
import Loading from "../Loading";
import profileStore from "../../stores/profileStore";

class UserProfile extends Component {
  state = {
    editing: false
  };
  componentDidMount() {
    if (authStore.user) {
      profileStore.fetchUserProfile();
    }
  }

  render() {
    if (!authStore.user) {
      return <Redirect to="login/" />;
    }
    if (profileStore.loading) {
      return <Loading />;
    } else {
      const userProfile = profileStore.userProfile;

      return (
        <div className="collec">
          <div>
            <h2>
              Name: `${userProfile.user.first_name} $
              {userProfile.user.last_name}`
            </h2>
            <h3>
              User Name:{" "}
              {this.state.editing ? (
                <input value="1"></input>
              ) : (
                userProfile.user.username
              )}
            </h3>
            <h3>Email Address: {userProfile.user.email}</h3>
            <h3>Date of Inception: {userProfile.date_joined}</h3>
            <h2>Address: {userProfile.address}</h2>
          </div>
        </div>
      );
    }
  }
}

export default observe(UserProfile);
