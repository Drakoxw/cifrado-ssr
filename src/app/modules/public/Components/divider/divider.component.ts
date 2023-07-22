import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html'
})
export class DividerComponent {
  getScreenWidth: number = 0;
  blocks: number[] = [];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.getScreenWidth = window?.innerWidth ?? 300;
      this.blocks = Array(Math.floor(this.getScreenWidth / 20) - 1 ).fill(0);
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if (typeof window !== 'undefined') {
      this.getScreenWidth = window?.innerWidth ?? 300 ;
      this.blocks = Array(Math.floor(this.getScreenWidth / 20) - 1).fill(0);
    }
  }
}
