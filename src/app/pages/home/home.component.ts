import { Component, OnInit, afterNextRender, inject } from '@angular/core';
import Typed from 'typed.js'
import { MetaService } from '../../services/meta.service';
import { Banner } from '../../models/banner.type';
import { QeButtonComponent } from '../../components/qe-button/qe-button.component';
import { CarouselItem } from '../../models/carousel-item.type';
import { HomeCarouselComponent } from '../../components/home-carousel/home-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeCarouselComponent, QeButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private metaService = inject(MetaService);

  file?: File;
  banner!: Banner;
  carouselItems: CarouselItem[] = [];
  buttonText = 'View Project';
  isButtonDisabled!: false;

  constructor() {
    afterNextRender(() => {
      new Typed('#typed-text', {
        loop: true,
        strings: [
          'Evolution',
          'Advancement',
          'Growth',
          'Innovation',
          'Progress',
        ],
        typeSpeed: 200,
      });
    });
  }

  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: '',
      description: `Quantum Edge Labs is more than an IT solutions provider, we're the innovation architects shaping tech around your unique needs. We don't host our own party, we invite you to be the centrepiece. It's your business, your vision — and our solutions start and end with you.`,
    });

    this.setCarouselItems();
  }

  setCarouselItems = () => {
    this.carouselItems = [
      {
        image: 'images/projects/curriculum-works.png',
        title: 'Curriculum Works',
        url: 'https://curriculumworks.org/',
      },
      {
        image: 'images/projects/eazyl.png',
        title: 'eazy labour',
        url: 'https://www.eazylabour.com/',
      },
      {
        image: 'images/projects/nvironment-planning.png',
        title: 'nvironmentplanning',
        url: 'https://nvironmentplanning.com/',
      },
      {
        image: 'images/projects/quotesouk.png',
        title: 'Quotesouk',
        url: 'https://quotesouk.com/',
      },
    ];
  };
}
