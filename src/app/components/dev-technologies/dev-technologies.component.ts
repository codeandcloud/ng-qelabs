import { Component, input } from '@angular/core';
import { Banner } from '../../models/banner.type';

@Component({
  selector: 'app-dev-technologies',
  standalone: true,
  imports: [],
  templateUrl: './dev-technologies.component.html',
  styleUrl: './dev-technologies.component.css'
})
export class DevTechnologiesComponent{
  techBanners = input.required<Banner[]>();
}
