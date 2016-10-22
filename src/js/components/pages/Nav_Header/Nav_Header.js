import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav_Header extends React.Component {
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
        // const featuredClass = location.pathname === "/" ? "active" : "";
        // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
        // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <img className="site_logo" src="https://wiki.jenkins-ci.org/download/attachments/327683/JENKINS?version=1&modificationDate=1302750804000"></img>
                        <ul className="nav navbar-nav">
                            <li activeClassName="active" onlyActiveOnIndex={true}>
                                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
                            </li>
                            <li activeClassName="active" onlyActiveOnIndex={true}>
                                <Link to="movies" onClick={this.toggleCollapse.bind(this)}>Movies</Link>
                            </li>
                            <li activeClassName="active">
                                <Link to="music" onClick={this.toggleCollapse.bind(this)}>Music</Link>
                            </li>
                            <li activeClassName="active">
                                <Link to="literature" onClick={this.toggleCollapse.bind(this)}>Litterature</Link>
                            </li>
                            { this.props.children }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}