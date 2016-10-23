import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
require('../styles/style.scss');

import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home/Home";
import Movies from "./components/pages/Movies/Movies";
import Music from "./components/pages/Music/Music";
import Literature from "./components/pages/Literature/Literature";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="movies_list" component={Movies}></Route>
                <Route path="movies_add"></Route>
                <Route path="movies_get"></Route>


            <Route path="music_list" component={Music}></Route>
                <Route path="music_add"></Route>
                <Route path="music_get"></Route>


            <Route path="literature_list" component={Literature}></Route>
                <Route path="literature_add"></Route>
                <Route path="literature_get"></Route>

        </Route>
    </Router>

    , app);