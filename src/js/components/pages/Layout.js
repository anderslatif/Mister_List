import React from "react";
import { Link } from "react-router";

import Nav_Header from "./Nav_Header/Nav_Header";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div>
                {<Nav_Header />}
                <span>Hellos</span>
                <Link to="music">music</Link>


            </div>
        )
    }

}
