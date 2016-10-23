import React from "react";
import { IndexLink, Link } from "react-router";

export default class Sub_Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
    }



    render() {
        const { location } = this.props;


        const subMenuHtml =
                <div className="container">


                <div className={"navbar-collapse"} id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li activeClassName="active" onlyActiveOnIndex={true}>
                            <Link to="movies_list">List</Link>
                        </li>
                        <li activeClassName="active">
                            <Link to="movies_add">Add</Link>
                        </li>
                        <li activeClassName="active">
                            <Link to="movies_get">Get</Link>
                        </li>
                    </ul>
                    </div>
                </div>;



        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                {subMenuHtml}
            </nav>
        );
    }





}
