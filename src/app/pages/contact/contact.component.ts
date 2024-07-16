import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  private metaService = inject(MetaService);
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'contact-us',
      description: 'Quantum Edge Labs | Contact Us',
    });
  }
}
