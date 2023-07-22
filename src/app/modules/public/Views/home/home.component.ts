import { Component } from '@angular/core';
import { Articules } from '@interfaces/models';
import { ListArticules } from '@mocks/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  articules:Articules[] = ListArticules
  widthPx = Math.floor((ListArticules.length / 2) * 278)
}
