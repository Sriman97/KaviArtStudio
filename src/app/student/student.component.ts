import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  student_images: Array<any>;

  constructor() { }

  ngOnInit() {
    this.student_images = data.student_images;
  }

}
