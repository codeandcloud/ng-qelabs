import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
})
export class CareersComponent implements OnInit {
  private metaService = inject(MetaService);
  contactFrom!: FormGroup;
  loading:boolean = false;
  constructor(public fb: FormBuilder){}
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'careers',
      description: 'Quantum Edge Labs | Careers',
    });
    this.contactFrom = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      position: [null, Validators.required],
      portfolio_link: [null],
      
      message: [null]
    })
  }

  public sendEmail(data: Event) {
    this.loading = true;
    emailjs
      .sendForm('service_w036nuv', 'template_rxl7wqr', data.target as HTMLFormElement, {
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
