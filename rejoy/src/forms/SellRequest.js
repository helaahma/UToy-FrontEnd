import React, { Component } from "react";
import { observer } from "mobx-react";
import collectableStore from "../stores/collectableStore";
import authStore from "../stores/authStore";
import { Redirect } from "react-router-dom";

class SellRequest extends Component {
  state = {
    item: "",
    group: "",
    description: "",
    condition: "",
    special_features: "",
    owner: "",
    desired_price: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    collectableStore.postForm(this.state);
    return <Redirect to="/" />;
  };

  render() {
    console.log("user", authStore.user);

    if (!authStore.user) return <Redirect to="/login/" />;

    {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <div className="form-group">
              <label> Item </label>
              <input
                type="text"
                className="form-control"
                name="item"
                onChange={event => this.handleChange(event)}
              />
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="form-group">
              <label> Group </label>
              <input
                type="text"
                className="form-control"
                name="group"
                onChange={event => this.handleChange(event)}
              />
            </div>
            <div className="input-group mb-3">
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  onChange={event => this.handleChange(event)}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <div className="form-group">
                <label>condition</label>
                <input
                  type="text"
                  className="form-control"
                  name="condition"
                  onChange={event => this.handleChange(event)}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <div className="form-group">
                <label> Special Features</label>
                <input
                  type="text"
                  className="form-control"
                  name="special_features"
                  onChange={event => this.handleChange(event)}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <div className="form-group">
                <label>Owner</label>
                {authStore.user.user_id}
              </div>
            </div>

            <div className="input-group mb-3">
              <div className="form-group">
                <label> Desired Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="desired_price"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  onChange={event => this.handleChange(event)}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      );
    }
  }
}

export default observer(SellRequest);
