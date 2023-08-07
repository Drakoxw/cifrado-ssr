import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

type TypeInput = 'text' | 'email' | 'password' | 'number' | 'date';

@Component({
  selector: 'input-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  /** Form control usado en el input */
  @Input() control = new FormControl();
  /** Titulo del input */
  @Input() label = '';
  /** Subtitulo del input en la parte inferior */
  @Input() sublabel = '';
  /** Id del inpuy para lo for del los labels */
  @Input() inputId = '';
  /** Tipo de input que se va a usar, por defecto es texto.
   * @example text, email, password, number, date
   * @default text
   * @type {TypeInput} */
  @Input() inputType: TypeInput = 'text';
  /** Indica si el input es obligatorio. */
  @Input() required = false;
  /** Placeholder del input */
  @Input() placeholder = '';
  /** Clase adicional para contenedor del componente */
  @Input() classComponent = '';
  /** Clase adicional para el input */
  @Input() classInput = '';
  /** Clase adicional para el label */
  @Input() classLabel = '';
  /** Recibe la indicacion si el input tiene un error. */
  @Input() set controlError(val: boolean) {
    this.error = val;
  };

  error: boolean = false;

  ngOnInit(): void {
    if (this.inputId == '') {
      this.inputId = this.label.toLowerCase().replace(' ', '-');
    }
  }

}
