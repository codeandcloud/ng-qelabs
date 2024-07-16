import { Route } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TechnologiesComponent } from './technologies/technologies.component';

export const PAGE_ROUTES: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us',
      },
      {
        path: 'careers',
        component: CareersComponent,
        title: 'Careers',
      },
      {
        path: 'contact-us',
        component: ContactComponent,
        title: 'Contact Us',
      },
      {
        path: '',
        component: HomeComponent,
        title: `Quantum Edge Labs is more than an IT solutions provider, we're the innovation architects shaping tech around your unique needs. We don't host our own party, we invite you to be the centrepiece. It's your business, your vision — and our solutions start and end with you.`,
      },
      {
        path: 'services',
        component: OurServicesComponent,
        title: 'Services',
      },
      {
        path: 'technologies',
        component: TechnologiesComponent,
        title: 'Technologies',
      },
    ],
  },
];
