import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './tabs/tabs.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FeaturedProjectsComponent } from './sections/featured-projects/featured-projects.component';
import { OtherProjectsComponent } from './sections/other-projects/other-projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { CoursesComponent } from './sections/courses/courses.component';
import { TicTacToeComponent } from './sections/featured-projects/apps/tic-tac-toe/tic-tac-toe.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabsComponent,
    TestComponent,
    Test2Component,
    FeaturedProjectsComponent,
    OtherProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactsComponent,
    CoursesComponent,
    TicTacToeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
