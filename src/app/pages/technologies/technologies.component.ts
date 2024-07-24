import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { Banner } from '../../models/banner.type';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { DevTechnologiesComponent } from '../../components/dev-technologies/dev-technologies.component';
import { ContactBottomComponent } from "../../components/contact-bottom/contact-bottom.component";

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [PageBannerComponent, DevTechnologiesComponent, ContactBottomComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent implements OnInit {
  banner!: Banner;
  devTechBanners: Banner[] = [];

  private metaService = inject(MetaService);
  ngOnInit(): void {
    this.setBanner();
    this.metaService.updateMeta({
      slug: 'technologies',
      description: 'Quantum Edge Labs | Technologies',
    });
    this.getDevTechBanners();
  }

  setBanner = () => {
    this.banner = {
      title: 'TECHNOLOGIES',
      description: `Explore cutting-edge and innovative technologies curated to revolutionise your business at Quantum Edge.`,
      image: 'images/technologies/technology.png',
    };
  };

  getDevTechBanners(): void {
    this.devTechBanners = [
      {
        image: 'images/dev-platforms/dotnet.png',
      },
      {
        image: 'images/dev-platforms/angular.png',
      },
      {
        image: 'images/dev-platforms/node.png',
      },
      {
        image: 'images/dev-platforms/react.png',
      },
      {
        image: 'images/dev-platforms/flutter.png',
      },
      {
        image: 'images/dev-platforms/android.png',
      },
      {
        image: 'images/dev-platforms/xamarin.png',
      },
      {
        image: 'images/dev-platforms/ios.png',
      },
      {
        image: 'images/dev-platforms/aws.png',
      },
      {
        image: 'images/dev-platforms/azure.png',
      },
    ];
  }
}
