import React from "react";

import About from "../Home/About";


export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <About className="col-md-6"/>
                <span className="col-md-6">I will put my sign in form here with registration abilities</span>
            </div>
        )
    }

}

