import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'input-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit, OnDestroy {
  @Input() control = new FormControl();
  @Input() label = '';
  @Input() sublabel = '';
  @Input() inputId = '';
  @Input() inputType = 'text';
  @Input() required = false;
  @Input() placeholder = '';
  @Input() classComponent = '';
  @Input() classInput = '';
  @Input() classLabel = '';

  error: boolean = false;
  subs: Subscription[] = [];

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  ngAfterViewInit() {
    this.error = Boolean(this.control.errors && this.control.touched);
  }

  ngOnInit(): void {
    if (this.required) {
      this.control.setValidators([Validators.required]);
    }
    this.subs[0] = this.control.valueChanges.subscribe(() => {
      this.error = false;
    })
  }

}
