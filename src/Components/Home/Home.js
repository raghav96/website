import React, { Component } from 'react';
import './Home.css';
import HexChart from '../HexChart/HexChart';
import WorldMap from '../WorldMap/WorldMap';
import logo from '../../logo.svg';
import image1 from '../../images/photo.png';
import image2 from '../../images/portfolio-2.jpg';
import image3 from '../../images/portfolio-3.jpg';


import image4 from '../../images/portfolio-4.jpg';
import image5 from '../../images/portfolio-5.jpg';
import image6 from '../../images/portfolio-6.jpg';
import image7 from '../../images/portfolio-7.jpg';
import image8 from '../../images/portfolio-8.jpg';
import BarChart from "../BarChart/BarChart";

class Home extends Component {

    render () {
        const values = [2,7,5,9,3,1,4,7,9,1,2,4,6];
        let rots = [];
        for(let i = 0; i <= 360; i++) {
            rots.push(i);
        }

        return (<div className="mainBody">
            <HexChart data={values} size={[500,400]} />
            <section>

                <figure>
                </figure>

                <article>
                    <p>
                        <span className="startLetter"><strong>W</strong></span>elcome! My name is Raghav and this is my personal website. This website is built using React, Bootstrap and D3.js.
                    </p>

                    <p><span className="startLetter"><strong>I</strong></span> am currently working at Medspace, an early-stage healthcare start-up, as a Systems Engineer. At Medspace, I build React web interfaces like this one. I am front-end web developer and data scientist currently residing in San Diego. </p>

                </article>
            </section>

            <section className="bgImage1">
                <figure>
                    <BarChart data={values} size={[300,200]}/>
                </figure>

                <article>
                    <p>Things in software development that really interest me are data science and full-stack web development.</p>

                    <p>Please <a href="mailto://raghav96@gmail.com">email</a> me if you would like to collaborate on data science projects! I am always looking to learn new techniques in machine learning and working on different datasets in data science.</p>

                    <p>I grew up in Singapore, India</p>
                </article>

            </section>

            <section className="bgImage2">

                <figure>
                    <WorldMap/>
                </figure>

                <article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum tellus felis, at lobortis orci sollicitudin ac. Donec lobortis sapien ac posuere faucibus. Mauris lectus neque, pretium non volutpat eget, vestibulum at magna. In sollicitudin augue nunc, non bibendum augue ornare quis.</p>

                    <p>Integer accumsan interdum justo eu pretium. Aliquam maximus mi sit amet dapibus efficitur.</p>

                    <p>Sed condimentum lacus sit amet turpis aliquam varius nec a lacus. In facilisis convallis ante sit amet consequat. Aenean a lorem mollis, bibendum nibh nec, maximus orci. Nulla facilisi.</p>
                </article>

            </section>

            <section className="bgImage2">

                <figure>
                    <img className="home-images" src={image2} alt="image2"/>
                </figure>

                <article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum tellus felis, at lobortis orci sollicitudin ac. Donec lobortis sapien ac posuere faucibus. Mauris lectus neque, pretium non volutpat eget, vestibulum at magna. In sollicitudin augue nunc, non bibendum augue ornare quis.</p>

                    <p>Integer accumsan interdum justo eu pretium. Aliquam maximus mi sit amet dapibus efficitur.</p>

                    <p>Sed condimentum lacus sit amet turpis aliquam varius nec a lacus. In facilisis convallis ante sit amet consequat. Aenean a lorem mollis, bibendum nibh nec, maximus orci. Nulla facilisi.</p>
                </article>

            </section>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum tellus felis, at lobortis orci sollicitudin ac. Donec lobortis sapien ac posuere faucibus. Mauris lectus neque, pretium non volutpat eget, vestibulum at magna. In sollicitudin augue nunc, non bibendum augue ornare quis.</p>

            <p>Integer accumsan interdum justo eu pretium. Aliquam maximus mi sit amet dapibus efficitur.</p>

            <p>Sed condimentum lacus sit amet turpis aliquam varius nec a lacus. In facilisis convallis ante sit amet consequat. Aenean a lorem mollis, bibendum nibh nec, maximus orci. Nulla facilisi.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum tellus felis, at lobortis orci sollicitudin ac. Donec lobortis sapien ac posuere faucibus. Mauris lectus neque, pretium non volutpat eget, vestibulum at magna. In sollicitudin augue nunc, non bibendum augue ornare quis.</p>

            <p>Integer accumsan interdum justo eu pretium. Aliquam maximus mi sit amet dapibus efficitur.</p>

            <p>Sed condimentum lacus sit amet turpis aliquam varius nec a lacus. In facilisis convallis ante sit amet consequat. Aenean a lorem mollis, bibendum nibh nec, maximus orci. Nulla facilisi.</p>

        </div>)

    }
}

export default Home;