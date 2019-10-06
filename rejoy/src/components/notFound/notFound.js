import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../assets/notfound.jpg";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img src={notfound} alt="not found" />
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
