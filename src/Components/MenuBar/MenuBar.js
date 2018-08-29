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
                            <NavItem eventKey={1} href="/">
                                About
                            </NavItem>
                            <NavDropdown eventKey={2} title="Work" id="basic-nav-dropdown">
                                <MenuItem eventKey={2.1} href="http://github.com/raghav96"><SocialIcon  url="http://github.com/raghav96"/><span className="menu-link">GitHub</span></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={2.2} href="http://medium.com/raghav96_77243" ><SocialIcon url="http://medium.com/raghav96_77243"/><span className="menu-link">Medium</span></MenuItem>

                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Contact" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="mailto:raghav96@gmail.com" ><SocialIcon url="mailto:raghav96@gmail.com"/><span className="menu-link">Email</span></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.2} href="http://linkedin.com/in/raghav96" ><SocialIcon url="http://linkedin.com/in/raghav96"/><span className="menu-link">LinkedIn</span></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3} onClick={() => {alert("(858) 952-3854")}}><SocialIcon url=""/><span className="menu-link">Phone</span></MenuItem>
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