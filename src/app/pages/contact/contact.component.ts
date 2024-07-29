import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import emailjs from '@emailjs/browser';
import { QeButtonComponent } from '../../components/qe-button/qe-button.component';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { ToastsContainer } from '../../helpers/toast';
import { ToastService } from '../../services/toast.service';
import { Banner } from '../../models/banner.type';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [
    ReactiveFormsModule,
    NgbTooltipModule,
    ToastsContainer,
    PageBannerComponent,
    QeButtonComponent,
  ],
})
export class ContactComponent implements OnInit, OnDestroy {
  private metaService = inject(MetaService);
  private toastService = inject(ToastService);
  banner!: Banner;

  contactFrom!: FormGroup;
  loading: boolean = false;
  constructor(public fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
    this.setBanner();
    this.updateMeta();
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }

  initForm = () => {
    this.contactFrom = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      services: ['GENERAL', Validators.required],
      message: [''],
    });
  };

  setBanner = () => {
    const subText = `Whether you're looking for information, have questions, or want to explore partnership opportunities, don't hesitate to reach out to us. Your inquiries are important to us, and we're here to assist you.`;
    this.banner = {
      title: 'Contact Us',
      description: `<p>We're excited to connect with you!</p><br><p>${subText}</p>`,
      image: 'images/contact/contact.png',
    };
  };

  updateMeta = () => {
    this.metaService.updateMeta({
      slug: 'contact-us',
      description: 'Quantum Edge Labs | Contact Us',
    });
  };

  public sendEmail(data: Event) {
    this.loading = true;
    const contactForm = data.target as HTMLFormElement;
     emailjs
      .sendForm(
        environment.emailjsConfig.serviceID,
        environment.emailjsConfig.contactTemplateID,
        contactForm,
        {
          publicKey: environment.emailjsConfig.publicKey,
        }
      )
      .then(
        (res) => {
         this.contactFrom.reset();
          this.loading = false;
          this.toastService.showSuccessToast('Email sent successfully');
        },
        (error: any) => {
          console.log(error, 'er');
          this.loading = false;
          this.toastService.showErrorToast('Error sending email');
        }
      ); 
  }
}
