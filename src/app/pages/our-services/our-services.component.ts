import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { Banner } from '../../models/banner.type';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { ServiceListComponent } from '../../components/service-list/service-list.component';
import { ContactBottomComponent } from '../../components/contact-bottom/contact-bottom.component';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [PageBannerComponent, ServiceListComponent, ContactBottomComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent implements OnInit {
  pageBanner!: Banner;
  serviceBanner: Banner[] = [];
  private metaService = inject(MetaService);
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'services',
      description: 'Quantum Edge Labs | Our Services',
    });

    this.setBanner();
    this.getServiceBanner();
  }

  setBanner() {
    this.pageBanner = {
      title: 'Our Services',
      description: `Our Tech Arsenal: Crafting Tailored Solutions for Your Success!`,
      image: 'images/services/services.png',
    };
  }

  getServiceBanner(): void {
    this.serviceBanner = [
      {
        title: 'WEB DESIGN',
        image: 'images/services/web-design.png',
        description:
          'Our adept team of graphic designers doesn`t just build websites; they craft digital experiences. From visually captivating site designs to custom graphics, flash intros, and full flash applications,we ensure your online presence is not only engaging but also leaves a lasting impression.',
      },
      {
        title: 'WEB APPLICATION ARCHITECTURE',
        image: 'images/services/web-application.png',
        description:
          'We don`t just design web applications; we create tailored solutions that optimise performance and scalability. Our goal is to align seamlessly with your present needs while future-proofing your business requirements.',
      },
      {
        title: 'SOFTWARE ENGINEERING',
        image: 'images/services/software-engineering.png',
        description:
          'Beyond creating software, our seasoned team engineers solutions that guarantee both efficiency and reliability. Whether it`s web architecture or desktop applications, we prioritise robust performance and seamless functionality.',
      },
      {
        title: 'MOBILE APPLICATION DEVELOPMENT',
        image: 'images/services/mobile-application.png',
        description:
          'Our expertise extends to native and cross-platform projects, employing technologies like Xamarin, Flutter, React Native, and Kotlin. We strive to deliver mobile solutions that are not just functional but exceed your expectations.',
      },
      {
        title: 'PROJECT MANAGEMENT',
        image: 'images/services/project-management.png',
        description:
          'Need a steady hand to navigate complex technical projects? Our professional team ensures projects are managed meticulously, keeping a keen eye on timelines and budgetary constraints for a smooth execution.',
      },
      {
        title: 'SOFTWARE SUPPORT',
        image: 'images/services/software-support.png',
        description:
          'With extensive experience, we provide comprehensive support for Microsoft and other software packages. Our aim is to resolve software issues efficiently, minimising downtime and maximising productivity.',
      },
      {
        title: 'PRE-SALES TECHNICAL CONSULTATION',
        image: 'images/services/technical-consultation.png',
        description:
          'Contemplating significant technology investments? Let us guide you. We assess options, provide well-informed recommendations, and assist in implementing solutions seamlessly.',
      },
      {
        title: 'NETWORK DESIGN',
        image: 'images/services/network-design.png',
        description:
          'Our network designs, led by experienced MCSE and CCNP professionals, aren`t just functional; they`re built to scale. Whether for small offices or large enterprises, our aim is efficient and adaptable networking.',
      },
      {
        title: 'NETWORK SUPPORT',
        image: 'images/services/network-support.png',
        description:
          'We`re not just about setting up networks; we ensure they operate optimally. From maintenance to troubleshooting and upgrades, we ensure your network infrastructure remains robust and reliable.',
      },
      {
        title: 'ADDITIONAL TECHNICAL CONSULTATION',
        image: 'images/services/custom-solutions.png',
        description:
          'Have specific technical needs? Our experienced team is ready to assist comprehensively. If it`s technical and you need help, we`ve got you covered.',
      },
    ];
  }
}
