import { Component, OnInit } from '@angular/core';
// import {} from '../../../assets/telerik.png'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  imgTelerik = '../../../assets/img/telerik.png';
  imgTeza = '../../../assets/img/teza.jpg';
  imgGerman = '../../../assets/img/german.jpg';
  currentSelection = 'telerik';

  constructor() { }

  ngOnInit() {
  }

  setPic(namePic: string) {
    this.currentSelection = namePic;
  }

}
