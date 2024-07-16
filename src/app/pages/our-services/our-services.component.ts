import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent implements OnInit {
  private metaService = inject(MetaService);
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'services',
      description: 'Quantum Edge Labs | Our Services',
    });
  }
}
