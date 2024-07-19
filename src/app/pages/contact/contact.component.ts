import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { QeButtonComponent } from '../../components/qe-button/qe-button.component';
import { Banner } from '../../models/banner.type';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [ReactiveFormsModule, PageBannerComponent, QeButtonComponent],
})
export class ContactComponent implements OnInit {
  private metaService = inject(MetaService);

  banner!: Banner;

  contactFrom!: FormGroup;
  loading: boolean = false;
  constructor(public fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
    this.setBanner();
    this.updateMeta();
  }

  initForm = () => {
    this.contactFrom = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      services: [null, Validators.required],
      message: [null],
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
    emailjs
      .sendForm(
        'service_w036nuv',
        'template_11235ym',
        data.target as HTMLFormElement,
        {
          publicKey: 'V08l-WfCBVyrm2dLo',
        }
      )
      .then(
        (res) => {
          this.contactFrom.reset();
          this.loading = false;
        },
        (error: any) => {
          console.log(error, 'er');
          this.loading = false;
        }
      );
  }

  handleButtonClick = () => {
    console.log('Button clicked!');
  };
}
