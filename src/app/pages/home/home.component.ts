import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { Banner } from '../../models/banner.type';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { QeButtonComponent } from '../../components/qe-button/qe-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageBannerComponent, QeButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private metaService = inject(MetaService);

  file?: File;
  banner!: Banner;
  buttonText = 'View Project';
  isButtonDisabled!: false;

  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: '',
      description: `Quantum Edge Labs is more than an IT solutions provider, we're the innovation architects shaping tech around your unique needs. We don't host our own party, we invite you to be the centrepiece. It's your business, your vision — and our solutions start and end with you.`,
    });
  }
  handleButtonClick = () => {
    console.log('data');
  };
  setBanner = () => {
    const subText = `Whether you're looking for information, have questions, or want to explore partnership opportunities, don't hesitate to reach out to us. Your inquiries are important to us, and we're here to assist you.`;
    this.banner = {
      title: 'Contact Us',
      description: `<p>We're excited to connect with you!</p><br><p>${subText}</p>`,
      image: 'images/contact/contact.png',
    };
  };
}
