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
    image: null,
    special_features: "",
    owner: "",
    desired_price: "",
    available: true
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleImage = event => {
    this.setState({ image: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("[SellRequest.JS] state :", this.state);
    let form_data = new FormData();
    form_data.append("image", this.state.image, this.state.image.name);
    form_data.append("item", this.state.item);
    form_data.append("group", this.state.group);
    form_data.append("condition", this.state.condition);
    form_data.append("special_features", this.state.special_features);
    form_data.append("owner", this.state.owner);
    form_data.append("desired_price", this.state.desired_price);
    form_data.append("description", this.state.description);
    form_data.append("available", this.state.available);
    console.log("[SellRequest.JS] form_data :", form_data);
    collectableStore.postForm(form_data, this.props.history);
  };

  render() {
    if (!authStore.user) return <Redirect to="/login/" />;
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
              <input
                type="file"
                name="image"
                accept="image/png, image/jpeg"
                onChange={this.handleImage}
              />
            </div>
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
          <div className="form-group">
            <label> Available </label>
            {this.state.available}
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

export default observer(SellRequest);
