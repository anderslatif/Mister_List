import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/pages/Layout";
import Movies from "./components/pages/Movies/Movies";
import Music from "./components/pages/Music/Music";
import Literature from "./components/pages/Literature/Literature";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Movies}/>
            <Route path="music" component={Music}/>
            <Route path="literature" component={Literature}/>
        </Route>
    </Router>

    , app);