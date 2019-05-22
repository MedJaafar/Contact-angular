import { Component, OnInit } from '@angular/core';
declare var ol: any;
@Component({
 selector: 'app-openstreetmap',
  templateUrl: './openstreetmap.component.html',
  styleUrls: ['./openstreetmap.component.css']
})



export class OpenstreetmapComponent implements OnInit {
 
  latitude: number = 37.243328;
  longitude: number =10.046740;
  map: any;
  
  constructor() { }

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([73.8567, 18.5204]),
        zoom: 8
      })
    });
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
    console.log(this.latitude+"   "+this.latitude);
  }

}
