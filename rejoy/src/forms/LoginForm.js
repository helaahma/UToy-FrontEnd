import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import "./style.css";
class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    authStore.login(this.state, this.props.history);
  };

  render() {
    const { username, password } = this.state;
    if (authStore.user) return <Redirect to="/" />;
    return (
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">
                  {" "}
                  <strong>Username</strong>
                </label>
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
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
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
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <br />
              <br />
              <Link to="/signup" className="btn btn-primary my-2 my-sm-0">
                Signup for an account
              </Link>

              <div className="login-logo">
                <img
                  alt="xd"
                  src={"http://www.pngmart.com/files/6/Rocket-PNG-File.png"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
