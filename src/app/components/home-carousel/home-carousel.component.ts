import { Component, input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselItem } from '../../models/carousel-item.type';
import { QeButtonComponent } from '../../components/qe-button/qe-button.component';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CarouselModule, QeButtonComponent],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css',
})
export class HomeCarouselComponent {
  buttonText = 'View Project';
  carouselItems = input.required<CarouselItem[]>();
  customOptions: OwlOptions = {
    autoplay: true,
    dots: false,
    loop: true,
    navSpeed: 1000,
    mouseDrag: false,
    nav: true,
    navText: ['<', '>'],
    pullDrag: false,
    animateIn: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    touchDrag: false,
  };

  handleButtonClick = () => {
    console.log('data');
  };
}
