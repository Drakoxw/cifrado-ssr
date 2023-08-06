import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

type TypeForm = {
  user: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html'
})
export class LoginViewComponent {
  form: FormGroup<TypeForm>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    })
  }


}
