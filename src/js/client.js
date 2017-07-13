import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./component/Layout";
import Settings from "./pages/Settings";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";



const app= document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives" name="archives" component={Archives}></Route>
      <Route path="settings(/:setting)" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);