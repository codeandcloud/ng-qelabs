import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { Banner } from '../../models/banner.type';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  templateUrl: './page-banner.component.html',
  styleUrl: './page-banner.component.css',
  imports: [NgStyle],
})
export class PageBannerComponent {
  banner = input.required<Banner>();

  getBackgroundImage(image: string) {
    return {
      'background-image': `url(${image})`,
    };
  }
}
