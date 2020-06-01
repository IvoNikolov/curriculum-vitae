import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  imgStork = '../../../assets/img/stork.png';
  imgParvomay = '../../../assets/img/parvomay.png';
  imgMuseum = '../../../assets/img/museum.png';
  imgQlik = '../../../assets/img/qlik.png';

  constructor() { }

  ngOnInit() {
  }

}
