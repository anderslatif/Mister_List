import React from "react";
import { Link } from "react-router";

import NavHeader from "./Nav/NavHeader";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {


        return (
            <div>
                {<NavHeader />}
                {this.props.children}
            </div>
        )
    }

}
