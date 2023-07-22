import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubRoutingModule } from './sub-routing.module'

import { AboutUsComponent } from './Views/about-us/about-us.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { HomeComponent } from './Views/home/home.component';

import { ButtonComponent } from '@shared/button/button.component'

@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ButtonComponent
  ]
})
export class ClientModule { }
