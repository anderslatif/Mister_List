import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";
require('../styles/style.scss');

import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home/Home";

import Movies_List from "./components/pages/Movies/MoviesList";
import Movies_Add from "./components/pages/Movies/MoviesAdd";
import Movies_Get from "./components/pages/Movies/MoviesGet";

import Music_List from "./components/pages/Music/MusicList";
import Music_Add from "./components/pages/Music/MusicAdd";
import Music_Get from "./components/pages/Music/MusicGet";


import Literature_List from "./components/pages/Literature/LiteratureList";
import Literature_Add from "./components/pages/Literature/LiteratureAdd";
import Literature_Get from "./components/pages/Literature/LiteratureGet";

const app = document.getElementById('app');

// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#should-i-use-hashhistory

// https://stormpath.com/blog/build-a-react-app-with-user-authentication

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>

            <Route path="movies_list" component={Movies_List}></Route>
            <Route path="movies_add" component={Movies_Add}></Route>
            <Route path="movies_get" component={Movies_Get}></Route>

            <Route path="music_list" component={Music_List}></Route>
            <Route path="music_add" component={Music_Add}></Route>
            <Route path="music_get" component={Music_Get}></Route>

            <Route path="literature_list" component={Literature_List}></Route>
            <Route path="literature_add" component={Literature_Add}></Route>
            <Route path="literature_get" component={Literature_Get}></Route>

        </Route>
    </Router>

    , app);