import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { LinksComponent } from './about-me-section/links/links.component';
import { TechstackSectionComponent } from './techstack-section/techstack-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeSectionComponent,
    LinksComponent,
    TechstackSectionComponent,
    PortfolioSectionComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
