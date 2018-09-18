import { Component, OnInit } from '@angular/core';
import {PHOTOS} from './app.mock.photos';
import {Photo} from './photo.entity';
 
@Component({
  selector: 'app-gallery',
  templateUrl: './app.gallery.component.html',
  styleUrls: [ './app.gallery.component.css' ]
})
export class GalleryComponent implements OnInit {
  //property to bind
  photos = PHOTOS;
  constructor() { }
 
  ngOnInit() {
  }
}