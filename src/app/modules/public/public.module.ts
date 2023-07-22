import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubRoutingModule } from './sub-routing.module'

import { HomeComponent } from './Views/home/home.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { AboutUsComponent } from './Views/about-us/about-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule
  ]
})
export class PublicModule { }
