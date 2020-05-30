import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  currentlySelected = 'about';
  classSelected = 'nav-link bg-primary text-light';
  classNotSelected = 'nav-link';
  selectedText = 'TABS.ABOUT';

  constructor() { }

  ngOnInit() {
  }

  onSelect(tabId: string) {
    this.currentlySelected = tabId;
    this.selectedText = `TABS.${tabId.toUpperCase()}_TEXT`;
  }

}
