import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private metaService = inject(MetaService);

  file?: File;

  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: '',
      description: `Quantum Edge Labs is more than an IT solutions provider, we're the innovation architects shaping tech around your unique needs. We don't host our own party, we invite you to be the centrepiece. It's your business, your vision — and our solutions start and end with you.`,
    });
  }
}
