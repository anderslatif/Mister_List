import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
require('../styles/style.scss');

import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home/Home";

import Movies_List from "./components/pages/Movies/Movies_List";
import Movies_Add from "./components/pages/Movies/Movies_Add";
import Movies_Get from "./components/pages/Movies/Movies_Get";

import Music from "./components/pages/Music/Music";
import Literature from "./components/pages/Literature/Literature";

const app = document.getElementById('app');

// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#should-i-use-hashhistory

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="movies_list" component={Movies_List}></Route>
                <Route path="movies_add" component={Movies_Add}></Route>
                <Route path="movies_get" component={Movies_Get}></Route>


            <Route path="music_list" component={Music}></Route>
                <Route path="music_add"></Route>
                <Route path="music_get"></Route>


            <Route path="literature_list" component={Literature}></Route>
                <Route path="literature_add"></Route>
                <Route path="literature_get"></Route>

        </Route>
    </Router>

    , app);