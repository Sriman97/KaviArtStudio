import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  reviews : Array<any>;

  constructor() {
  }

  ngOnInit() {
    this.reviews = data.reviews;
  }



}
