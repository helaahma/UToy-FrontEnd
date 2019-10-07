import React, { Component } from "react";
import { Link } from "react-router-dom";
import authStore from "../stores/authStore";

class Registration extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  //   understand event.target.name, How does the name work??

  handleSubmit = event => {
    event.preventDefault();
    authStore.signupUser(this.state);
  };

  render() {
    const { username, password, email, first_name, last_name } = this.state;

    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>

                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="first_name"
                  className="form-control"
                  id="first_name"
                  value={first_name}
                  name="first_name"
                  placeholder="first_name"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="last_name"
                  className="form-control"
                  id="last_name"
                  value={last_name}
                  name="last_name"
                  placeholder="last_name"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Signup
              </button>
              <Link to="/login" className="btn btn-link my-2 my-sm-0">
                I already have an account
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
