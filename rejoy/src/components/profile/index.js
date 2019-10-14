import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
//components
import authStore from "../../stores/authStore";
//stores
import collectableStore from "../../stores/collectableStore";
import bidStore from "../../stores/bidStore";
import Loading from "../Loading";
import profileStore from "../../stores/profileStore";

class UserProfile extends Component {
  state = {
    editing: false,
    address: profileStore.userProfile.address
  };
  componentDidMount() {
    if (authStore.user) {
      profileStore.fetchUserProfile();
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    //call profile update function
    this.setState({ editing: false });
  };

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
            <h3>User Name: userProfile.user.username</h3>
            <h3>Email Address: {userProfile.user.email}</h3>
            <h3>Date of Inception: {userProfile.date_joined}</h3>
            {this.state.editing ? (
              <input
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              ></input>
            ) : (
              <h2>Address: {userProfile.address}</h2>
            )}
            {this.state.editing ? (
              <button onClick={this.handleSubmit}>Submit</button>
            ) : (
              <button onClick={() => this.setState({ editing: true })}>
                Update
              </button>
            )}
          </div>
        </div>
      );
    }
  }
}

export default observer(UserProfile);
