import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const L: any;

@Component({
  selector: 'rm-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements AfterViewInit {

  countries = [
    {title: 'Ireland', cities: [
      {title: 'Dublin', coordinates: [52.396145, 4.6535841]}
    ]},
    {title: 'France', cities: [
      {title: 'Marseille', coordinates: [43.2965, 5.3698]}
    ]},
    {title: 'Netherlands', cities: [
      {title: 'Amsterdam', coordinates: [52.3676, 4.9041]},
      {title: 'Utrecht', coordinates: [52.0907, 5.1214]},
      {title: 'Woerden', coordinates: [52.0869, 4.8627]},
      {title: 'Leeuwarden', coordinates: [53.2194, 5.9299]},
    ]},
    {title: 'Germany', cities: [
      {title: 'Leipzig', coordinates: [51.3397, 12.3731]},
      {title: 'Frankfurt', coordinates: [50.1109, 8.6821]},
      {title: 'Berlin', coordinates: [52.5200, 13.4050]},
    ]},
    {title: 'Denmark', cities: [
      {title: 'Copenhagen', coordinates: [52.5200, 13.4050]}
    ]},
    {title: 'USA', cities: [
      {title: 'Chicago', coordinates: [41.878113, -87.629799]}
    ]},
    {title: 'Finland', cities: [
      {title: 'Vantaa', coordinates: [60.294411, 25.04007]}
    ]},
    {title: 'Hungary', cities: [
      {title: 'Budapest', coordinates: [47.497913, 19.040236]}
    ]},
    {title: 'Italy', cities: [
      {title: 'Milan', coordinates: [45.464203, 9.189982]}
    ]},
    {title: 'Spain', cities: [
      {title: 'Madrid', coordinates: [40.416775, -3.70379]}
    ]},
    {title: 'Switzerland', cities: [
      {title: 'Zurich', coordinates: [47.376888, 8.541694]}
    ]},
    {title: 'Romania', cities: [
      {title: 'Cluj-Napoca', coordinates: [46.77092, 23.58992]}
    ]},
    {title: 'Lithuania', cities: [
      {title: 'Vilnius', coordinates: [54.687157, 25.279652]}
    ]},
    {title: 'Poland', cities: [
      {title: 'Warsaw', coordinates: [52.229675, 21.01223]}
    ]},
    {title: 'Belgium', cities: [
      {title: 'Brussels', coordinates: [50.850346, 4.351721]}
    ]},
    {title: 'Nigeria', cities: [
      {title: 'Lagos', coordinates: [9.081999, 8.675277]}
    ]},
    {title: 'UAE', cities: [
      {title: 'Dubai', coordinates: [25.204849, 55.270782]}
    ]},
    {title: 'Turkey', cities: [
      {title: 'Istanbul', coordinates: [41.00824, 28.978359]}
    ]},
  ];

  ngAfterViewInit() {

    console.log(L);
    var map = L.map('map', {
      center: [52.396145, 4.6535841],
      zoom: 2,
      attributionControl: false
    });
    L.tileLayer('https://api.mapbox.com/styles/v1/joeskh/clhca0uxh012f01pnc28nbe7y/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9lc2toIiwiYSI6ImNqcmRjaHd3cDFpNXQ0NG4wYXlpbHdyY2EifQ.NKW364vtTL2bs6wz57Pkpg', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    const netherlandsCoordinates = [[]];

    var netherlandsPolygon = L.polygon(netherlandsCoordinates, {
      color: 'blue',  // Border color
      fillColor: 'lightblue',  // Fill color
      fillOpacity: 0.5  // Fill opacity
    }).addTo(map);


    // Creating a marker
    // var marker = L.marker([30.1020722,31.3477031], {icon: marker});
    this.countries.forEach(c => {
      c.cities.forEach(city => {
        var marker = L.icon({
          iconUrl: '/assets/marker.webp',
          iconSize: [28, 28],
          iconAnchor: [14, 28], // point of the icon which will correspond to marker's location
          popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        var marker: any = L.marker(city.coordinates, { icon: marker });
        // Adding marker to the map
        marker.addTo(map);
      })
    });
  }
}
