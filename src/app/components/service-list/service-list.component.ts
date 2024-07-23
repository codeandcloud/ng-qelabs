import { Component, input } from '@angular/core';
import { Banner } from '../../models/banner.type';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css',
})
export class ServiceListComponent {
  serviceListBanners = input.required<Banner[]>();
}
