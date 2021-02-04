var mymap = L.map('mapid').setView([38.63, -90.2], 11);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var BLKMKT = L.marker([38.635, -90.242]).addTo(mymap);
var Twisted_Ranch = L.marker([38.608, -90.201]).addTo(mymap);
var SweetArt = L.marker([38.612, -90.246]).addTo(mymap);
var Macs = L.marker([38.591, -90.218]).addTo(mymap);
var Peacemaker = L.marker([38.6037, -90.215]).addTo(mymap);

BLKMKT.bindPopup("<b>Restaurant 1</b><br>BLK MKT Eats.").openPopup();
Twisted_Ranch.bindPopup("<b>Restaurant 2</b><br>Twisted Ranch.").openPopup();
SweetArt.bindPopup("<b>Restaurant 3</b><br>SweetArt.").openPopup();
Macs.bindPopup("<b>Restaurant 4</b><br>Mac's Local Eats.").openPopup();
Peacemaker.bindPopup("<b>Restaurant 5</b><br>Peacemaker Lobster & Crab.").openPopup();
