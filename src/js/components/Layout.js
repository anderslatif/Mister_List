import React from "react";
import ReactDOM from "react-dom";

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
                <Nav_Header />
            </div>
        )
    }

}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);