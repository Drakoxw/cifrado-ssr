import { Component } from '@angular/core';

const data = [
  'Proporcionamos asesoría y soluciones con equipos de última tecnología.',
  'Nuestro personal está altamente calificado para ofrecerle las mejores alternativas.',
  'Trabajamos con equipos con altos estándares de calidad para asegurar el perfecto funcionamiento y confiabilidad que necesita.',
  'Garantía y soporte técnico inmediato',
];

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {
  list: string[] = data
}
