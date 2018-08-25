import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


import './Footer.css';

class Footer extends Component {

    render () {
        return (<div>
            <SocialIcon className="social" url="http://www.linkedin.com/in/raghav96"/>
            <SocialIcon className="social" url="http://www.github.com/raghav96"/>
            <SocialIcon className="social" url="http://www.instagram.com/raghavism"/>
            <SocialIcon className="social" url="http://www.facebook.com/raghav96"/>
            <SocialIcon className="social" url="http://www.twitter.com/raghavism"/>
        </div>)

    }
}

export default Footer;