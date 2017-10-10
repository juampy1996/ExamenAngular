import { Component, OnInit } from '@angular/core';
import { MapsServiceService } from '../service/maps-service.service';

@Component({
  selector: 'app-component7',
  templateUrl: './component7.component.html',
  styleUrls: ['./component7.component.css']
})
export class Component7Component implements OnInit {

  title: string = 'My first AGM project';
  lat: number = -21.537038;
  lng: number = -64.741277;
  zoom: number = 15;
  coordenadas = [];

  

 constructor(private mapas: MapsServiceService) { 
    this.coordenadas= mapas.coordenadas;
    console.log(this.coordenadas);
    
  }
// constructor() { 
  

//   }

  ngOnInit() {
  }

}
