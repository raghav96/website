import React, { Component } from 'react';
import './MenuBar.css';
import {SocialIcon} from 'react-social-icons';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

class MenuBar extends Component {


    render () {
        return (<Navbar className="navigate" collapseOnSelect>
                    <Navbar.Header href="#">
                        <a className="brand" href="/">Raghav Ravisankar</a>
                    </Navbar.Header>
                    <Navbar.Toggle />

                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                About
                            </NavItem>
                            <NavDropdown eventKey={2} title="Work" id="basic-nav-dropdown">
                                <MenuItem eventKey={2.1} ><SocialIcon url="http://www.github.com/raghav96">GitHub</SocialIcon></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={2.2} ><SocialIcon url="http://www.medium.com/raghav96_77243">Medium</SocialIcon></MenuItem>

                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Contact" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}><SocialIcon url="mailto:raghav96@gmail.com">Email</SocialIcon></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.2}><SocialIcon url="http://www.linkedin.com/in/raghav96">LinkedIn</SocialIcon></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3} onClick={() => {alert("(858) 952-3854")}}>Phone</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={4} href="http://docs.google.com/document/d/1jQrwHeQNcw2yx1kJArXLXX5IWyFudi9khT4yzzi2fUw/edit?usp=sharing">
                                Hire
                            </NavItem>
                            <NavItem eventKey={4} href="http://instagram.com/raghavism">
                                Photos
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )}
}

export default MenuBar;