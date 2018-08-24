import React, { Component } from 'react';
import './MenuBar.css';
import logo from '../../logo.png';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import {Link } from 'react';

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
                                <MenuItem eventKey={2.1}>GitHub</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={2.2}>Medium</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Contact" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="mailto:raghav96@gmail.com">Email</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.2} href="http://www.linkedin.com/in/raghav96">LinkedIn</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3} onClick={() => {alert("(858) 952-3854")}}>Phone</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={4} href="#">
                                Hire
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )}
}

export default MenuBar;