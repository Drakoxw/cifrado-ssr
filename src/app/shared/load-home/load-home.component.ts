import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { LoadingComponent } from '@shared/loading/loading.component';
// import { PATHS_FULL_CLIENT } from '@constants/routes';

@Component({
  selector: 'app-load-home',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './load-home.component.html',
  styleUrls: ['./load-home.component.css']
})
export class LoadHomeComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    // const currentUrl = this.router.url;
    // if (currentUrl === '/') {
    //   this.router.navigate([PATHS_FULL_CLIENT.home]);
    // }
  }
}
