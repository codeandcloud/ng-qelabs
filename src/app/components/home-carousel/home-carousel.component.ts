import { Component, input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselItem } from '../../models/carousel-item.type';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css',
})
export class HomeCarouselComponent {
  carouselItems = input.required<CarouselItem[]>();
  customOptions: OwlOptions = {
    autoplay: true,
    dots: false,
    loop: true,
    navSpeed: 500,
    mouseDrag: false,
    nav: true,
    navText: ['', ''],
    pullDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    touchDrag: false,
  };
}
