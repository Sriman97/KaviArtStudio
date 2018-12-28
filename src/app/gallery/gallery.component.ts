import { Component, OnInit } from '@angular/core';
import data from "../../assets/data.json";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery_images : Array<any>;

  constructor() { }

  ngOnInit() {
    this.gallery_images = data.gallery_images;
  }

}
