import React from "react";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default class NavHeader extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }



    render() {

        const logoImages =
            <div>
                <img className="site_logo" src="http://i.imgur.com/MM32z7S.png"></img>
                <img className="site_logo_text" src="http://i.imgur.com/AKFvubG.png"></img>
            </div>;

        const signOutMenuItem = <span></span>; /*Todo Use the store variable to check if the user is signed in if so then show this button*/

        const navbarInstance = (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        {logoImages}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>

                        <LinkContainer to="/">
                            <NavItem>Home</NavItem>
                        </LinkContainer>

                        <NavDropdown eventKey={2} title="Movies" id="basic-nav-dropdown">
                            <LinkContainer to="movies_list">
                                <MenuItem eventKey={2.1}>List</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="movies_add">
                                <MenuItem eventKey={2.2}>Add</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="movies_get">
                                <MenuItem eventKey={2.3}>Get</MenuItem>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown eventKey={3} title="Music" id="basic-nav-dropdown">
                            <LinkContainer to="music_list">
                                <MenuItem eventKey={3.1}>List</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="music_add">
                                <MenuItem eventKey={3.2}>Add</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="movies_get">
                              <MenuItem eventKey={3.3}>Get</MenuItem>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown eventKey={4} title="Literature" id="basic-nav-dropdown">
                            <LinkContainer to="literature_list">
                                <MenuItem eventKey={4.1}>List</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="literature_add">
                                <MenuItem eventKey={4.2}>Add</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="literature_get">
                                <MenuItem eventKey={4.3}>Get</MenuItem>
                            </LinkContainer>
                        </NavDropdown>

                        {signOutMenuItem}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );



        return (
            <div>
                {navbarInstance}
            </div>
        );
    }
}
