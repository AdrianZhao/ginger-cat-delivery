
/*
  OOP JavaScript
  Yuhan Zhao

*/

'use strict';

function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select (selector, parent = document) {
  return parent.querySelector(selector);
}
function selectAll (selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}
function print(arg) {
  console.log(arg);
}

function create(element, parent = document) {
  return parent.createElement(element);
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYWNobm5hbCIsImEiOiJjbGc1ZzQ4ejgwMzV4M2VwY245MDk1cHVhIn0.ZvhIf1LSZ3xgngDR8eJ5eQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true, showUserLocation: true});

function successLocation(position) {
  setUpMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setUpMap([-97.138451, 49.895077]);
}
function setUpMap(center) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15,
  });
  const marker = new mapboxgl.Marker({
    color: "#ffa500",
    draggable: true
    }).setLngLat(center)
    .addTo(map);
}