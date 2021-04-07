import './style.css';

L.map('mapid',{
  center: L.latLng(43.72301, 10.39663), 
  zoom: 15,
  layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      ]}
);
