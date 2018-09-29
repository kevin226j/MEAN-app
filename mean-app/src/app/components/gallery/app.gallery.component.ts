import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import {PHOTOS} from './app.mock.photos';

import {IPhoto} from './Iphoto.entity';
import {DemoService} from '../../services/api/demo/demo.service';

 
@Component({
  selector: 'app-gallery',
  templateUrl: './app.gallery.component.html',
  styleUrls: [ './app.gallery.component.css' ]
})
export class GalleryComponent implements OnInit {

  //property to bind
  photos:any = [];
  constructor(private demoService : DemoService, private route: ActivatedRoute) { }
 
  ngOnInit() {
    this.getData();
  }

  getData () : void {
    this.photos = [];
    this.demoService.GetAll().subscribe((data: {}) => {
      console.log(data);
      this.photos = data;
    });
  }
}