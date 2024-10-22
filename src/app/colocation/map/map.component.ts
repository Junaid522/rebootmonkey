import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var d3: any;
declare const L: any;

@Component({
  selector: 'rm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {


  countries = ['USA', 'Libya', 'Egypt', 'Netherlands', 'Japan', 'Spain', 'Germany', 'Austria'];

  ngAfterViewInit() {

    console.log(L);
    var marker = L.icon({
      iconUrl: '/assets/marker.webp',  
      iconAnchor:   [24, 48], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
    var map = L.map('map', {
      center: [-8.8143, 13.226],
      zoom: 2,
      attributionControl: false
    });
    L.tileLayer('https://api.mapbox.com/styles/v1/joeskh/clhca0uxh012f01pnc28nbe7y/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9lc2toIiwiYSI6ImNqcmRjaHd3cDFpNXQ0NG4wYXlpbHdyY2EifQ.NKW364vtTL2bs6wz57Pkpg', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // Creating a marker
    // var marker = L.marker([30.1020722,31.3477031], {icon: marker});
    var marker = L.marker([52.396145,4.6535841], {icon: marker});
    
    // Adding marker to the map
    marker.addTo(map);

    /*
      // The svg
      var svg = d3.select("#my_dataviz"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

      // @ts-ignore
      height = document.getElementById('my_dataviz').getClientRects()[0].height;
      // @ts-ignore
      width = document.getElementById('my_dataviz').getClientRects()[0].width;

      // Map and projection
      var projection = d3.geoNaturalEarth1()
        .scale(width / 1.3 / Math.PI)
        .translate([width / 2, height / 2])

      // Load external data and boot
      d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", (data: any) => {
        // Draw the map
        svg.append("g")
          .selectAll("path")
          .data(data.features)
          .enter().append("path")
          .attr("fill", (d: any) => { return this.countries.find((c: any) => c === d.properties.name) ? '#FAE200' : '#828282'; })
          .attr("d", d3.geoPath()
            .projection(projection)
          )
          .style("stroke", "#828282")
          .append("svg:title").text((d: any) => { return this.countries.find((c: any) => c === d.properties.name) ? d.properties.name : ''; });
      })
    */
  }
}
