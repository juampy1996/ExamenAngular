import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component9',
  templateUrl: './component9.component.html',
  styleUrls: ['./component9.component.css']
})
export class Component9Component implements OnInit {
  defaultImage = 'https://www.placecage.com/1000/1000';
  image = 'https://images-na.ssl-images-amazon.com/images/G/01/Automotive/Entity/CRS/v1/2006_JohnDeere_Buck_650EXT._CB139115425_.jpg';
  offset = 100;
  constructor() { }

  ngOnInit() {
  }

}
