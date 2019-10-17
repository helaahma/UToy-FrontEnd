import React from "react";
import { observer } from "mobx-react";
import logo from "./logo.svg";
import "./App.css";
//components
import collectableList from "./components/collectable";
import collectableDetail from "./components/collectable/CollectableDetail";
import SellRequest from "./forms/SellRequest";
import Login from "./forms/LoginForm";
import registration from "./forms/Registration";
import notFound from "./components/notFound/notFound";

import Loading from "./components/Loading";
//Router
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

//Stores
import collectableStore from "./stores/collectableStore";
import profile from "./components/profile";
import SideBar from "./components/SideBar";
import Logout from "./components/Logout";
import "./components/collectable/style.css";

function App() {
  const getView = () => {
    if (collectableStore.loading) {
      return <Loading />;
    } else {
      return (
        <Switch className="App">
          <Redirect exact from="/" to="/list" />
          <Route path="/list/:collectableCond?/" component={collectableList} />
          <Route path="/detail/:id" component={collectableDetail} />
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={registration} />
          <Route path="/logout/" component={Logout} />
          <Route path="/sellrequest/" component={SellRequest} />
          <Route path="/profile/" component={profile} />
          <Route component={notFound} />
        </Switch>
      );
    }
  };
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
}

export default withRouter(observer(App));
