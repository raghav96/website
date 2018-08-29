import React, { Component } from 'react';
import './Home.css';
import HexChart from '../HexChart/HexChart';
import WorldMap from '../WorldMap/WorldMap';
import image1 from '../../images/photo.png';
import image5 from '../../images/portfolio-5.jpg';

import BarChart from "../BarChart/BarChart";
import Footer from "../Footer/Footer";

class Home extends Component {
    constructor(props){
        super(props);
    }


    render () {
        const values = [2,7,5,9,3,1,4,7,9,1,2,4,6];
        let rots = [];
        for(let i = 0; i <= 360; i++) {
            rots.push(i);
        }

        return (<div className="mainBody">
            <HexChart data={values} size={[500,500]} />
            <Footer/>
            <section>

                <figure>
                    <img className="photo-image" src={image1} alt="image1"/>

                </figure>

                <article>
                    <p>
                        <span className="startLetter"><strong>W</strong></span>elcome! My name is Raghav and this is my personal website. I built this website by myself with some helpful software engineering.
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

                    <p>I was born in India, moved to Singapore at the age of 1. I spent most of my childhood doing creative endeavours, like singing, art, painting.</p>
                </article>

            </section>

            <section className="bgImage2">

                <figure>
                    <WorldMap/>
                </figure>

                <article>
                    <p>After spending 11 years in Singapore, I moved back to India at the age of 13. In my high school I picked up programming in my high school classes.</p>
                    <p>I consider web development and data science as a form of art too! This globe image and the graphic above were rendered using d3.js</p>
                    <p>I am actively looking for paid data scientist or software developer positions in order to start my career.</p>
                </article>

            </section>

            <section className="bgImage2">

                <figure>
                    <img className="home-images" src={image5} alt="image2"/>
                </figure>

                <article>
                    <p>If you would like to take a look at my projects, please visit my <a href="http://www.github.com/raghav96">Github</a></p>
                    <p>When I was in India, I developed an interest to photography. I take photos like these in my free time.</p>
                    <p>I hope I can bring my creative ability and skills in software development to solve your needs.</p>

                </article>

            </section>
            <br/>
            <br/>
            <br/>
        </div>)

    }
}

export default Home;
