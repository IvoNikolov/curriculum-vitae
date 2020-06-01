import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentLang = '';
  currentSelection = 'about';
  isCollapsed = false;
  topBg = '../../assets/img/me.jpg';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'bg']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserCultureLang().substr(0, 2);
    this.currentLang = browserLang.match(/en|bg/) ? browserLang : 'en';
    translate.use(this.currentLang);
  }

  ngOnInit() {

    $(document).ready(() => {

      $('.experience').click(() => {
        $('#select1').collapse('show');
      });

      $('.featuredProjects').click(() => {
        $('#select2').collapse('show');
      });

      $('.otherProjects').click(() => {
        $('#select3').collapse('show');
      });

      $('.courses').click(() => {
        $('#select4').collapse('show');
      });

      $('.skills').click(() => {
        $('#select5').collapse('show');
      });

      $('.contacts').click(() => {
        $('#select6').collapse('show');
      });

      $('.education').click(() => {
        $('#select7').collapse('show');
      });

    });
  }

  changeLang() {
    this.currentLang = this.currentLang === 'en' ? 'bg' : 'en';
    this.translate.use(this.currentLang);
  }

  scrollToElement($element): void {

    this.collaseNavBarSm();

    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});

    this.currentSelection = $element.getAttribute('id');
    console.log(this.currentSelection);

  }

  collaseNavBarSm() {
    document.getElementById('nav1').classList.remove('show');
  }

  changeIcon($element) {
    if (this.currentSelection === $element.getAttribute('id')) {
      this.currentSelection = '';
    } else {
      this.currentSelection = $element.getAttribute('id');
    }
  }

}
