import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.scss']
})
export class OtherProjectsComponent implements OnInit {

  projectsArray = [1,2,2,4]

  constructor() { }

  ngOnInit() {
  }

}
