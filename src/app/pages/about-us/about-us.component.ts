import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { Banner } from '../../models/banner.type';
import { AboutCultureWorkComponent } from "../../components/about-culture-work/about-culture-work.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [PageBannerComponent, AboutCultureWorkComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements OnInit {
  pageBanner!: Banner;

aboutUsBanners:Banner[]=[];

  private metaService = inject(MetaService);
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'about-us',
      description: 'Quantum Edge Labs | About Us',
    });
    this.setBanner();
    this.getAboutUsBanners();
  }
  setBanner() {
    this.pageBanner = {
      title: 'About Us',
      description: `Empowering Your Vision with Tailored Technological Precision`,
      image: 'images/about/about-us.png',
    };
  }

  getAboutUsBanners(): void {
    this.aboutUsBanners = [
      {
        title: 'Diversity',
        image: 'images/about/diversity.png',
        description:
          'Embracing diversity is a core value at Quantum Edge. We believe in fostering an inclusive workplace that respects and values different perspectives, cultures, and backgrounds, promoting innovation and a rich exchange of ideas.',
      },
      {
        title: 'Innovation',
        image: 'images/about/innovation.png',
        description:
          'Our culture thrives on innovation. We encourage a dynamic work environment that nurtures creativity, welcomes new ideas, and champions a culture of continuous improvement, empowering employees to push the boundaries of technology.',
      },
      {
        title: 'Transparency',
        image: 'images/about/transparency.png',
        description:
          'Transparency is integral to our work ethic. We maintain open lines of communication, ensuring a collaborativeatmosphere where feedback is encouraged, and ideas are shared openly, fostering a supportive and united team spirit.',
      },
      {
        title: 'Growth',
        image: 'images/about/growth.png',
        description:
          'Quantum Edge is committed to the growth of its employees. We provide ample opportunities for professional development, learning initiatives, and skill enhancement programs, fostering a culture of growth and empowerment among our teams.',
      },
    ];
  }
}
