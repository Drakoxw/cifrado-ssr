import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubRoutingModule } from './sub-routing.module';

import { ButtonComponent } from '@shared/button/button.component';
import { LoginViewComponent } from './Views/login-view/login-view.component';
import { ListClientViewComponent } from './Views/list-client-view/list-client-view.component';

@NgModule({
  declarations: [
    LoginViewComponent,
    ListClientViewComponent
  ],
  imports: [CommonModule, SubRoutingModule, ButtonComponent],
})
export class ClientModule {}
