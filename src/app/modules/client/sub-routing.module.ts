import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PATHS_MODULE_CLIENT } from '@constants/routes';
import { LoginViewComponent } from './Views/login-view/login-view.component';
import { ListClientViewComponent } from './Views/list-client-view/list-client-view.component';
import { authGuard } from 'src/app/core/guards/auth.guard';


const routes: Routes = [
  {
    path: PATHS_MODULE_CLIENT.login,
    component: LoginViewComponent,
  },
  {
    path: PATHS_MODULE_CLIENT.listClients,
    canActivate: [authGuard],
    component: ListClientViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubRoutingModule {}
