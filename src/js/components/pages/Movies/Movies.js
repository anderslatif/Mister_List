import React from "react";

import SubNav from "./../Nav/SubNav/Sub_Nav";

export default class Movies extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <SubNav />
                <div>
                    <span>Hello hello.. I am in Movies.js</span>
                </div>
            </div>
        )
    }

}
