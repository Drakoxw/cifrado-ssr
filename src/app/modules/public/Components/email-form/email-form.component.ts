import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {
  REGEX,
  RadioOptionsContactUs,
  radioButtonsFormContactUs,
} from '@constants/index';
import { logDev } from '@utils/console';
import { Subscription } from 'rxjs';

type TypeForm = {
  name: FormControl<string | null>;
  lastname: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
  subject: FormControl<string | null>;
  otherSubject: FormControl<string | null>;
  message: FormControl<string | null>;
};

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit, OnDestroy {
  form: FormGroup<TypeForm>;
  optionsSubject: RadioOptionsContactUs[] = radioButtonsFormContactUs;
  subs: Subscription[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(REGEX.PHONE)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      otherSubject: ['', [Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    const subsc = this.form.get('subject')?.valueChanges.subscribe((val) => {
      if (val === 'Otro') {
        this.form
          .get('otherSubject')
          ?.setValidators([Validators.required, Validators.minLength(3)]);
        this.form.get('otherSubject')?.updateValueAndValidity();
      } else {
        this.form.get('otherSubject')?.clearValidators();
        this.form.get('otherSubject')?.updateValueAndValidity();
      }
    });
    if (subsc) {
      this.subs[0] = subsc;
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return;
    }
    logDev('form.value',this.form.value)
    this.form.reset();
  }

  get name() {
    return {
      validateError:
        this.form.get('name')?.errors && this.form.get('name')?.touched,
    };
  }
  get lastname() {
    return {
      validateError:
        this.form.get('lastname')?.errors && this.form.get('lastname')?.touched,
    };
  }
  get email() {
    return {
      validateError:
        this.form.get('email')?.errors && this.form.get('email')?.touched,
    };
  }
  get phone() {
    return {
      validateError:
        this.form.get('phone')?.errors && this.form.get('phone')?.touched,
    };
  }
  get subject() {
    return {
      validateError:
        this.form.get('subject')?.errors && this.form.get('subject')?.touched,
    };
  }
  get otherSubject() {
    return {
      validateError:
        this.form.get('otherSubject')?.errors &&
        this.form.get('otherSubject')?.touched,
    };
  }
  get message() {
    return {
      validateError:
        this.form.get('message')?.errors && this.form.get('message')?.touched,
    };
  }
}
