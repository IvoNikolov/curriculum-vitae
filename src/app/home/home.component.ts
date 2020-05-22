import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentLang = '';
  currentSelection = '';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'bg']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserCultureLang().substr(0, 2);
    this.currentLang = browserLang.match(/en|bg/) ? browserLang : 'en';
    translate.use(this.currentLang);
  }

  ngOnInit() {
  }

  changeLang() {
    this.currentLang = this.currentLang === 'en' ? 'bg' : 'en';
    this.translate.use(this.currentLang);
  }

  openRow(id) {
    this.currentSelection = id;
    //this.val1 = 'collapse show';
  }

  openRow2() {
    //this.val2 = 'collapse show';
  }

}
