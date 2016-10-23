import React from "react";
import { IndexLink, Link } from "react-router";

export default class Sub_Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";



        const subMenuHtml = <div>
        <li activeClassName="active" onlyActiveOnIndex={true}>
            <Link to="movies" onClick={this.toggleCollapse.bind(this)}>List</Link>
        </li>
        <li activeClassName="active">
            <Link to="music" onClick={this.toggleCollapse.bind(this)}>Add</Link>
        </li>
        <li activeClassName="active">
            <Link to="literature" onClick={this.toggleCollapse.bind(this)}>Get</Link>
        </li>
            </div>;




        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                {subMenuHtml}
            </nav>
        );
    }
}
