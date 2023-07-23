import {
  Component,
  Input,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Articules } from '@interfaces/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @ViewChild('artic', { static: false }) artic!: ElementRef<HTMLElement>;
  @Input() articule!: Articules;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9 // El elemento debe estar al menos 90% visible para que se active el callback
    };

    if (isPlatformBrowser(this.platformId) && this.artic) {
      const observer = new IntersectionObserver(this.handleIntersection, options);
      observer.observe(this.artic.nativeElement);
    }
  }

  handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.children[0]?.classList.remove('hidden')
      }
    })
  }
}
