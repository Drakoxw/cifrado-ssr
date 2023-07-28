import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubRoutingModule } from './sub-routing.module'

import { HomeComponent } from './Views/home/home.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { AboutUsComponent } from './Views/about-us/about-us.component';
import { DividerComponent } from './Components/divider/divider.component';
import { Banner1Component } from './Components/banner1/banner1.component';
import { FooterHomeComponent } from './Components/footer-home/footer-home.component';
import { CarruselComponent } from './Components/carrusel/carrusel.component';
import { CardComponent } from './Components/card/card.component';
import { StrategicGuidelinesComponent } from './Components/strategic-guidelines/strategic-guidelines.component';
import { Banner2Component } from './Components/banner2/banner2.component';
import { EmailFormComponent } from './Components/email-form/email-form.component';
import { ButtonComponent } from '@shared/button/button.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    DividerComponent,
    Banner1Component,
    FooterHomeComponent,
    CarruselComponent,
    CardComponent,
    StrategicGuidelinesComponent,
    Banner2Component,
    EmailFormComponent,
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ButtonComponent
  ]
})
export class PublicModule { }
