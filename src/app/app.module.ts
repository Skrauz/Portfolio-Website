import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { LinksComponent } from './about-me-section/links/links.component';
import { TechstackSectionComponent } from './techstack-section/techstack-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ContactFormComponent } from './contact-section/contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeSectionComponent,
    LinksComponent,
    TechstackSectionComponent,
    PortfolioSectionComponent,
    ContactSectionComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MdbFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
