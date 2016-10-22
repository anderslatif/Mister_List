import React from "react";
import { Link } from "react-router";

import Nav from "./Nav/Nav";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {


        return (
            <div>
                {<Nav />}
                {this.props.children}
            </div>
        )
    }

}
