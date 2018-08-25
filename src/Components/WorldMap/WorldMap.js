import React, { Component } from 'react'
import worlddata from './world';
import "./WorldMap.css"
import { geoOrthographic, geoPath, geoGraticule} from 'd3-geo'
import {select } from 'd3-selection';

class WorldMap extends Component {
    constructor(props){
        super(props);
        this.state = {
           rotate : -80
        };
        this.generateMap = this.generateMap.bind(this);

    }
    componentDidMount() {
        this.generateMap()
    }
    componentDidUpdate() {
        this.generateMap()
    }

    generateMap(){
        const node = this.node;
        const projection = geoOrthographic().scale(140).rotate([this.state.rotate,0,0]).translate([150, 150]);
        const path = geoPath().projection(projection);

        const graticule = geoGraticule();

        select(node)
            .select("body").append("svg")
            .attr("width", 400)
            .attr("height", 400);

        select(node)
            .select("defs").append("path")
            .datum({"type": "Sphere"})
            .attr("id", "sphere")
            .attr("d", path);

        select(node)
            .append("use")
            .attr("class", "stroke")
            .attr("xlink:href", "#sphere");
        select(node)
            .append("use")
            .attr("class", "fill")
            .attr("xlink:href", "#sphere");
        select(node)
            .append("path")
            .datum(graticule)
            .attr("class", "graticule")
            .attr("d", path);
        select(node)
            .insert("path", ".graticule")
            .datum(worlddata)
            .attr("class", "land")
            .attr("d", path);
        select(node)
            .insert("path", ".graticule")
            .datum(worlddata)
            .attr("class", "boundary")
            .attr("d", path);

        return projection;
    }
    /*
        var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("defs").append("path")
    .datum({type: "Sphere"})
    .attr("id", "sphere")
    .attr("d", path);

svg.append("use")
    .attr("class", "stroke")
    .attr("xlink:href", "#sphere");

svg.append("use")
    .attr("class", "fill")
    .attr("xlink:href", "#sphere");

svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

d3.json("/mbostock/raw/4090846/world-50m.json", function(error, world) {
  if (error) throw error;

  svg.insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land")
      .attr("d", path);

  svg.insert("path", ".graticule")
      .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
      .attr("class", "boundary")
      .attr("d", path);
});

d3.select(self.frameElement).style("height", height + "px");

        * */
    render() {
        const projection2 = this.generateMap();
        const pathGenerator = geoPath().projection(projection2);
        const countries = worlddata.features
            .map((d,i) => <path
                key={'path' + i}
                d={pathGenerator(d)}
                className='countries'
            />);
        return <svg width={300} height={300}>
            {countries}
        </svg>
    }
}
export default WorldMap;