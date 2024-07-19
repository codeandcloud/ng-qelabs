import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
// import { storage } from '../../firebase/firebase.init';
import { MailService } from '../../services/mail.service';
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
  loading: boolean = false;
  file?: File;

  constructor(public fb: FormBuilder, public service: MailService) {}
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
      cv_file: [null],
      message: [null],
    });
  }

  async sendEmail(data: Event) {
    this.loading = true;
    // const downloadURL = await this.uploadFile();
    const form = data.target as HTMLFormElement;
    console.log(form);
    // emailjs
    //   .sendForm('service_w036nuv', 'template_rxl7wqr', form, {
    //     publicKey: 'V08l-WfCBVyrm2dLo',
    //   })
    //   .then(
    //     (res) => {
    //       this.contactFrom.reset();
    //       this.loading = false;
    //     },
    //     (error: any) => {
    //       console.log(error, 'er');
    //       this.loading = false;
    //     }
    //   );
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  // async uploadFile() {
  //   if (!this.file) {
  //     return '';
  //   }
  //   let downloadURL = '';
  //   try {
  //     const storageRef = ref(storage, this.file.name);
  //     var snapshot = await uploadBytes(storageRef, this.file);
  //     console.log('Uploaded a blob or file!', snapshot);
  //     downloadURL = await getDownloadURL(snapshot.ref);
  //     console.log('File available at', downloadURL);
  //     return downloadURL;
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     return downloadURL;
  //   }
  // }
}
