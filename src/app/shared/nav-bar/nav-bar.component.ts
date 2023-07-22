import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PATHS_FULL_CLIENT } from '@constants/routes';

export const RoutesPath = {
  FOREST: 'forescast',
  CARDS: 'cards',
  COMP_DOC: 'comp-document'
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  routes = PATHS_FULL_CLIENT

  showMenu: boolean = false

  routeActiveClass = 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded'

  routeNoactiveClass = 'block py-2 pl-3 pr-4 text-gray-900 rounded bg-gray-50 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'

  ToogleMenu() {
    setTimeout(() => this.showMenu = !this.showMenu, 150)
  }

}
