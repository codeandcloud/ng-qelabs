import { Component, OnInit, input } from '@angular/core';
import { Banner } from '../../models/banner.type';

@Component({
  selector: 'app-about-culture-work',
  standalone: true,
  imports: [],
  templateUrl: './about-culture-work.component.html',
  styleUrl: './about-culture-work.component.css',
})
export class AboutCultureWorkComponent implements OnInit {
  cultureBanners = input.required<Banner[]>();
  ngOnInit(): void {}
}
