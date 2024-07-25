import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { Banner } from '../../models/banner.type';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { OpenRolesComponent } from '../../components/open-roles/open-roles.component';

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
import { Role } from '../../models/role.type';
import { title } from 'process';
@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [ReactiveFormsModule, PageBannerComponent, OpenRolesComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
})
export class CareersComponent implements OnInit {
  private metaService = inject(MetaService);
  banner!: Banner;
  roles: Role[] = [];
  contactFrom!: FormGroup;
  loading: boolean = false;
  file?: File;

  constructor(public fb: FormBuilder, public service: MailService) {}
  ngOnInit(): void {
    this.setBanner();
    this.getOpenRole();
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

  setBanner = () => {
    this.banner = {
      title: 'careers',
      description: `At Quantum Edge, we're passionate about building a team of innovative minds driven by technology's endless possibilities. Join us in shaping the future of cutting-edge solutions and make a real impact.`,
      image: 'images/careers/careers.png',
    };
  };

  getOpenRole(): void {
    this.roles = [
      {
        title: 'ASP.NET Developer',
        experience: '3-4 years',
        location: 'kochi',
        position: 'Permanent',
        skill: '',
      },
      {
        title: 'ASP.NET Developer',
        experience: '3-4 years',
        location: 'kochi',
        position: 'Permanent',
        skill: '',
      },
      {
        title: 'ASP.NET Developer',
        experience: '3-4 years',
        location: 'kochi',
        position: 'Permanent',
        skill: '',
      },
      {
        title: 'ASP.NET Developer',
        experience: '3-4 years',
        location: 'kochi',
        position: 'Permanent',
        skill: '',
      },
    ];
    console.log(this.roles);
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
