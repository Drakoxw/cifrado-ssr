import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  OnDestroy,
} from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

const DataCarrusel = [
  {
    image: '../../../../../assets/img/banner-home/cableadobanner.webp',
    alt: 'Cableado banner',
  },
  {
    image: '../../../../../assets/img/banner-home/cctvbanner.webp',
    alt: 'CCTV banner',
  },
  {
    image: '../../../../../assets/img/banner-home/mantbanner.webp',
    alt: 'Mantenimiento banner',
  },
  {
    image: '../../../../../assets/img/banner-home/ptpbanner.webp',
    alt: 'ptp banner',
  }
]

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
})
export class CarruselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselWrapper') carouselWrapperRef!: ElementRef<HTMLDivElement>;
  private currentItemIndex = 0;
  private itemWidth = 0;

  dataCarrusel = [...DataCarrusel, ...DataCarrusel]
  susb: Subscription[] = [];
  source = interval(4000);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnDestroy(): void {
    this.susb.forEach((s) => s.unsubscribe());
  }

  ngAfterViewInit() {
    if (this.carouselWrapperRef && isPlatformBrowser(this.platformId)) {
      this.itemWidth = this.carouselWrapperRef.nativeElement.children[0].clientWidth;
      this.susb[0] = this.source.subscribe(() => {
        this.nextSlide();
      })
    }
  }

  private moveCarousel() {
    if (this.carouselWrapperRef && this.itemWidth) {
      const translate = `translateX(${-this.itemWidth * this.currentItemIndex}px)`
      this.carouselWrapperRef.nativeElement.style.transform = translate;
    }
  }

  nextSlide() {
    if (this.carouselWrapperRef && this.itemWidth) {
      this.currentItemIndex++;
      if (this.currentItemIndex >= this.carouselWrapperRef.nativeElement.children.length) {
        this.currentItemIndex = 0;
      }
      this.moveCarousel();
    }
  }
}
