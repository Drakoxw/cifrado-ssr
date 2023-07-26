import { Component } from '@angular/core';

type DataInfo = { title: string; content: string; }
const dataMision: DataInfo[] = [
  {
    title: 'Misión',
    content: 'Ofrecer soluciones integrales de tecnología, en los ámbitos de sistemas, electricidad, seguridad y telecomunicaciones para satisfacer las necesidades empresariales y particulares de nuestros clientes; con servicios innovadores, eficientes, efectivos y de alta calidad, garantizando la satisfacción total en cada proyecto realizado.'
  },
  {
    title: 'Visión',
    content: 'CIFRADO se consolidara como una de las empresas de servicios Tecnológicos más importantes del Territorio Nacional cumpliendo con los estándares de Calidad, seguridad y cumplimiento; reconocida como modelo estructural y empresarial a seguir, con un equipo de trabajo sólido y comprometido.'
  },
  {
    title: 'Valores',
    content: 'Espíritu de servicio, excelencia, honestidad, responsabilidad, integridad, trabajo en equipo.'
  }
]

@Component({
  selector: 'app-strategic-guidelines',
  templateUrl: './strategic-guidelines.component.html'
})
export class StrategicGuidelinesComponent {
  public data: DataInfo[] = dataMision
}
