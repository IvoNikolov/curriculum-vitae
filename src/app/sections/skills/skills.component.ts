import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    new Skill('SKILLS.LANGUAGE', 'Typescript/Javascript, PHP'),
    new Skill('SKILLS.FRAMEWORK', 'Ionic, Angular'),
    new Skill('SKILLS.DATABASE', 'Firebase, MySQL'),
    new Skill('SKILLS.LIBRARY', 'Bootstrap 4, jquery'),
    new Skill('SKILLS.VERSION_CONTROL', 'Git, GitLab, Tortoise SVN'),
    new Skill('SKILLS.TICKET_SYSTEM', 'Jira, Trello')
  ];

  constructor() { }

  ngOnInit() {
  }

}
