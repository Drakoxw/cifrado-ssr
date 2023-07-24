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
import { logDev } from '@utils/console';

const DataCarrusel = [
  {
    image: '../../../../../assets/img/banner-home/cableadobanner.webp',
    alt: 'Cableado banner',
    title: 'DISEÑO, INSTALACIÓN Y MANTENIMIENTO DE CABLEADO ESTRUCTURADO Y DATA CENTER',
  },
  {
    image: '../../../../../assets/img/banner-home/cctvbanner.webp',
    alt: 'CCTV banner',
    title: 'SISTEMAS DE CÁMARAS DE SEGURIDAD, ALARMAS & SENSORES',
  },
  {
    image: '../../../../../assets/img/banner-home/mantbanner.webp',
    alt: 'Mantenimiento banner',
    title: 'SOPORTE & MANTENIMIENTO - PÓLIZAS',
  },
  {
    image: '../../../../../assets/img/banner-home/ptpbanner.webp',
    alt: 'ptp banner',
    title: 'ENLACES INALÁMBRICOS PUNTO A PUNTO Y PtMP - RADIO ENLACE',
  }
]

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
})
export class CarruselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselWrapper') carouselWrapperRef!: ElementRef<HTMLDivElement>;
  image = '../../../../../assets/img/banner-home/cableadobanner.webp'
  alt = 'Cableado banner'
  title = 'DISEÑO, INSTALACIÓN Y MANTENIMIENTO DE CABLEADO ESTRUCTURADO Y DATA CENTER'
  susb: Subscription[] = [];
  source = interval(4000);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnDestroy(): void {
    this.susb.forEach((s) => s.unsubscribe());
  }

  ngAfterViewInit() {
    if (this.carouselWrapperRef && isPlatformBrowser(this.platformId)) {
      this.susb[0] = this.source.subscribe(() => {
        this.changeImage()
      })
    }
  }

  changeImage() {
    switch (this.image) {
      case DataCarrusel[0].image:
        this.image = DataCarrusel[1].image
        this.alt = DataCarrusel[1].alt
        this.title = DataCarrusel[1].title
        break;
      case DataCarrusel[1].image:
        this.image = DataCarrusel[2].image
        this.alt = DataCarrusel[2].alt
        this.title = DataCarrusel[2].title
        break;
      case DataCarrusel[2].image:
        this.image = DataCarrusel[3].image
        this.alt = DataCarrusel[3].alt
        this.title = DataCarrusel[3].title
        break;
      default:
        this.image = DataCarrusel[0].image
        this.alt = DataCarrusel[0].alt
        this.title = DataCarrusel[0].title
        break;
    }
  }


}
