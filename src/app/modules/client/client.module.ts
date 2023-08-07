import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubRoutingModule } from './sub-routing.module';

import { ButtonComponent } from '@shared/button/button.component';
import { LoginViewComponent } from './Views/login-view/login-view.component';
import { ListClientViewComponent } from './Views/list-client-view/list-client-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFormComponent } from '@src/app/shared/input-form/input-form.component';

@NgModule({
  declarations: [LoginViewComponent, ListClientViewComponent],
  imports: [
    CommonModule,
    SubRoutingModule,
    ReactiveFormsModule,
    ButtonComponent,
    InputFormComponent
  ],
})
export class ClientModule {}
