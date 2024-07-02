import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private metaService = inject(MetaService);
  contactFrom!: FormGroup;
  loading:boolean = false;
  constructor(public fb: FormBuilder){}
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'contact-us',
      description: 'Quantum Edge Labs | Contact Us',
    });
    this.contactFrom = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      services: [null, Validators.required],
      message: [null]
    })
  }

  public sendEmail(data: Event) {
    this.loading = true;
    emailjs
      .sendForm('service_w036nuv', 'template_11235ym', data.target as HTMLFormElement, {
        publicKey: 'V08l-WfCBVyrm2dLo',
      })
      .then(
        (res) => {
          this.contactFrom.reset()
          this.loading = false;
        },
        (error:any) => {
          console.log(error,"er")
          this.loading = false;
        },
      );
  }
}
