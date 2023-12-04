/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

var lat = 46.186504598160354;
var long = 21.31672212393795;
var map = L.map('map');

var path1 = {
    point1: [46.18110856093534, 21.334147644362133],
    point2: [46.18114362378955, 21.33389909964393],
    point3: [46.181179325783575, 21.33367389363056],
    point4: [46.1812174707637, 21.33345020029654]
};

var path2 = {
    point1: [46.189728132843214, 21.32100208359492],
    point2: [46.189903673029164, 21.3201778302886],
    point3: [46.19004371101988, 21.319496979551815],
    point4: [46.1904344896661, 21.319150513422613]
};

var markers = L.layerGroup().addTo(map);
var tramStations = L.layerGroup().addTo(map);
var busStations = L.layerGroup().addTo(map);
var stations = L.layerGroup().addTo(map);
var vehicles = L.layerGroup().addTo(map);
var trams = L.layerGroup().addTo(map);
var busses = L.layerGroup().addTo(map);
var vehicles = L.layerGroup();
var stations = L.layerGroup();
var group = L.layerGroup();


var busIcon = L.icon({
    iconUrl: '../img/bus.png',

    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

});

var tramIcon = L.icon({
    iconUrl: '../img/tram.png',

    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

});

var tramStationIcon = L.icon({
    iconUrl: '../img/tram-station.png',

    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

});

var busStationIcon = L.icon({
    iconUrl: '../img/bus-station.png',

    iconSize:     [20, 20], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

});

var redCircleIcon = L.icon({
    iconUrl: '../img/red-circle.png',

    iconSize:     [10, 10], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [5, 5], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

});

var greenCircleIcon = L.icon({
    iconUrl: '../img/green-circle.png',

    iconSize:     [10, 10], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [5, 5], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

});

var orangeCircleIcon = L.icon({
    iconUrl: '../img/orange-circle.png',

    iconSize:     [10, 10], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [5, 5], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

});



function updateLocation(vehicle, lat, long)
{

    let newLatLng = new L.LatLng(lat, long);
    vehicle.setLatLng(newLatLng); 

    if(vehicle.getTooltip() != undefined)
    {
        //console.log(vehicle.getTooltip(), newLatLng)
        vehicle.setTooltipContent('Numar 15<br>' + newLatLng);
    }
}

let count1 = 0;
let count2 = 0;

function updateBus1Location()
{
    if(count1 == 0)
    {
        updateLocation(busses.getLayer(41), path1.point2[0], path1.point2[1]);
    }
    if(count1 == 1)
    {
        updateLocation(busses.getLayer(41), path1.point3[0], path1.point3[1]);
    }
    if(count1 == 2)
    {
        updateLocation(busses.getLayer(41), path1.point4[0], path1.point4[1]);
    }
    if(count1 == 3)
    {
        updateLocation(busses.getLayer(41), path1.point1[0], path1.point1[1]);
    }

    count1++;

    if(count1 == 4)
    {
        count1 = 0;
    }

}

function updateBus2Location()
{
    if(count2 == 0)
    {
        updateLocation(busses.getLayer(43), path2.point2[0], path2.point2[1]);
    }
    if(count2 == 1)
    {
        updateLocation(busses.getLayer(43), path2.point3[0], path2.point3[1]);
    }
    if(count2 == 2)
    {
        updateLocation(busses.getLayer(43), path2.point4[0], path2.point4[1]);
    }
    if(count2 == 3)
    {
        updateLocation(busses.getLayer(43), path2.point1[0], path2.point1[1]);
    }

    count2++;

    if(count2 == 4)
    {
        count2 = 0;
    }
}

setInterval(updateBus1Location, 1000);
setInterval(updateBus2Location, 1000);

map.setView([lat, long], 11);

let longHTML = document.getElementById('long');
let latHTML = document.getElementById('lat');

document.addEventListener('deviceready', onDeviceReady, false);

function successCallback(position) 
{
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    //console.log(long, lat);
    longHTML.innerHTML = 'long: ' + long;
    latHTML.innerHTML = 'lat: ' + lat;

    markers.clearLayers();

    var marker = L.marker([lat, long]);
    markers.addLayer(marker);

    //map.setView([lat, long], 17);
}

function errorCallback(error) 
{
    longHTML = error.message;
}

function onIconClicked(e)
{
    //console.log(e.target);

    e.target.bindTooltip().setTooltipContent('Numar: 15<br>' + e.latlng).openTooltip();

}

function testrequest() {

    fetch("http://uav-easy-exams.xyz:5000/api/", {
        method: "GET",
        origin: "*"
    }).then(response => console.log(response.body));

}

function onDeviceReady() {
    
    navigator.geolocation.watchPosition(successCallback, errorCallback, {timeout: 30000, enableHighAccuracy: true, maximumAge: 10000});

    // Cordova is now initialized. Have fun!
    //TODO: change the color of the icons
    //TODO: fetch api
    testrequest();

    map.on('zoom', () => {
        //console.log(map.getZoom());
        if(map.getZoom() < 12)
        {
            trams.eachLayer(function (layer) {
                layer.setIcon(redCircleIcon);
            });       

            busses.eachLayer(function (layer) {
                layer.setIcon(redCircleIcon);
            });       
            
            tramStations.eachLayer(function (layer) {
                layer.setIcon(orangeCircleIcon);
            });       
            
            busStations.eachLayer(function (layer) {
                layer.setIcon(orangeCircleIcon);
            });         
        }

        if(map.getZoom() >= 12)
        {
            trams.eachLayer(function (layer) {
                layer.setIcon(tramIcon);
            });       

            busses.eachLayer(function (layer) {
                layer.setIcon(busIcon);
            });       
            
            tramStations.eachLayer(function (layer) {
                layer.setIcon(tramStationIcon);
            });       
            
            busStations.eachLayer(function (layer) {
                layer.setIcon(busStationIcon);
            });       
        }
    });   

    busses.addLayer(L.marker([46.186504598160354, 21.31672212393795], {icon: busIcon}))
    trams.addLayer(L.marker([46.19415956018912, 21.32930712676395], {icon: tramIcon}))
    busses.addLayer(L.marker([46.211714584686376, 21.28094521106874], {icon: busIcon}))
    trams.addLayer(L.marker([46.17659892614944, 21.360590184119104], {icon: tramIcon}))
    busses.addLayer(L.marker([path1.point1[0], path1.point1[1]], {icon: busIcon}))
    busses.addLayer(L.marker([path2.point1[0], path2.point1[1]], {icon: busIcon}))

    //console.log(busses);
    //console.log(trams);

    //red icons 

    tramStations.addLayer(L.marker([46.192717706185675, 21.30671085657869], {icon: tramStationIcon})) //Piata UTA 1
    tramStations.addLayer(L.marker([46.19198489656148, 21.309036999309342], {icon: tramStationIcon})) //Piata UTA 2
    busStations.addLayer(L.marker([46.19201679592439, 21.309687798703436], {icon: busStationIcon})) //Piata UTA 2
    tramStations.addLayer(L.marker([46.19445649475108, 21.30238895692193], {icon: tramStationIcon})) //Electrometal
    tramStations.addLayer(L.marker([46.19523231563144, 21.30066520759806], {icon: tramStationIcon})) //Electrometal
    busStations.addLayer(L.marker([46.19560175934345, 21.299444911490667], {icon: busStationIcon})) //Electrometal
    tramStations.addLayer(L.marker([46.19900080754985, 21.29559201591539], {icon: tramStationIcon})) //Fortuna
    tramStations.addLayer(L.marker([46.199825705922876, 21.29434886697271], {icon: tramStationIcon})) //Fortuna

    trams.eachLayer((layer) => {
        console.log(layer.getLatLng());
        vehicles.addLayer(layer);
        group.addLayer(layer);
    });

    busses.eachLayer((layer) => {
        vehicles.addLayer(layer);
        group.addLayer(layer);

    });
    
    tramStations.eachLayer((layer) => {
        stations.addLayer(layer);
        group.addLayer(layer);

    });
    
    busStations.eachLayer((layer) => {
        stations.addLayer(layer);
        group.addLayer(layer);

    });
    
    console.log(vehicles);
    console.log("stations");
    console.log(stations);


    group.eachLayer((layer) => {
        layer.bindTooltip().setTooltipContent('Numar: 15<br>' + layer.getLatLng());
    });
    //var map = L.map('map').setView([46.186504598160354, 21.31672212393795], 11); <- Arad
   
    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
    }).addTo(map);
    //stadia statem terrain

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}
