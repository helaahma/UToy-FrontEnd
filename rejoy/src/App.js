import React from "react";
import { observer } from "mobx-react";
import logo from "./logo.svg";
import "./App.css";
//components
import collectableList from "./components/collectable/index";
import collectableDetail from "./components/collectable/CollectableDetail";
import notFound from "./components/notFound/notFound";
import Loading from "./components/Loading";
//Router
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

//Stores
import collectableStore from "./stores/collectableStore";

function App() {
  const getView = () => {
    if (collectableStore.loading) {
      return <Loading />;
    } else {
      return (
        <Switch className="App">
          <Redirect exact from="/" to="/list" />
          <Route path="/list/:collectableCond?/" component={collectableList} />
          <Route path="/detail/:id/" component={collectableDetail} />
          <Route component={notFound} />
        </Switch>
      );
    }
  };
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        {/* <div className="col-2">
          <Sidebar />
        </div> */}
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
}

export default withRouter(observer(App));
