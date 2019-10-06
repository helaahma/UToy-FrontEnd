import React, { Component } from "react";
import { observer } from "mobx-react";
import collectableStore from "../src/stores/collectableStore";

class SellRequest extends Component {
  state = {
    item: "",
    group: "",
    description: "",
    image: "",
    conditions: "",
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
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit(event)}>
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
              <label>image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                onChange={event => this.handleChange(event)}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="form-group">
              <label>conditions</label>
              <input
                type="text"
                className="form-control"
                name="conditions"
                onChange={event => this.handleChange(event)}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            {/* NEED TO CHECK FIELD */}
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
              <input
                type="text"
                className="form-control"
                name="owner"
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

export default observer(SellRequest);