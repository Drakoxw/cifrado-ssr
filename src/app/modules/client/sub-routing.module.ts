import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Views/home/home.component';

import { PATHS_MODULE_CLIENT } from '@constants/routes';
import { AboutUsComponent } from './Views/about-us/about-us.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: PATHS_MODULE_CLIENT.root,
    component: HomeComponent,
  },
  {
    path: PATHS_MODULE_CLIENT.home,
    component: HomeComponent,
  },
  {
    path: PATHS_MODULE_CLIENT.aboutUs,
    component: AboutUsComponent,
  },
  {
    path: PATHS_MODULE_CLIENT.contactUs,
    component: ContactUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubRoutingModule {}
