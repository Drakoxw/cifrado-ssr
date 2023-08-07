import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthService, ToastrAlertService } from '@services/index';
import { LoginRequest } from '@interfaces/request';
import { Router } from '@angular/router';
import { PATHS_FULL_CLIENT } from '@constants/index';

type TypeForm = {
  user: FormControl<string | null>;
  password: FormControl<string | null>;
};

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
})
export class LoginViewComponent {
  form: FormGroup<TypeForm>;
  load: boolean = false;

  private toastr = inject(ToastrAlertService);
  private Auth = inject(AuthService);
  private router: Router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toastr.warning('Faltan Campos Obligatorios!', 'Error');
      return;
    }
    this.load = true;
    const payload: LoginRequest = {
      user: String(this.form.value.user),
      password: String(this.form.value.password),
    }
    this.Auth.login(payload).subscribe({
      next: (res) => {
        this.load = false;
        if (res.error) {
          return this.toastr.error(res.msg, 'Error');
        }
        this.form.reset();
        this.toastr.success('Bienvenido', 'Ok');
        return this.router.navigate([PATHS_FULL_CLIENT.listClients])
      }
    })

  }

  get user() {
    const { errors, touched } = this.form.controls.user;
    return { validateError: errors != null && touched };
  }

  get password() {
    const { errors, touched } = this.form.controls.password;
    return { validateError: errors != null && touched };
  }
}
