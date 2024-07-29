import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import emailjs from '@emailjs/browser';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db } from '../../configs/firebase.config';
import { MailService } from '../../services/mail.service';
import { MetaService } from '../../services/meta.service';
import { PageBannerComponent } from '../../components/page-banner/page-banner.component';
import { OpenRolesComponent } from '../../components/open-roles/open-roles.component';
import { ToastsContainer } from '../../helpers/toast';
import { ToastService } from '../../services/toast.service';
import { Banner } from '../../models/banner.type';
import { Role } from '../../models/role.type';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgbTooltipModule,
    ToastsContainer,
    PageBannerComponent,
    OpenRolesComponent,
  ],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
})
export class CareersComponent implements OnInit, OnDestroy {
  private metaService = inject(MetaService);
  private toastService = inject(ToastService);
  banner!: Banner;
  roles: Role[] = [];
  careerFrom!: FormGroup;
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
    this.careerFrom = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      position: [null, Validators.required],
      portfolio_link: [null],
      cv_file: [null],
      message: [null],
    });
  }

  ngOnDestroy(): void {
    this.toastService.clear();
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
        title: 'Angular Internship',
        experience: '3-4 years',
        location: 'Remote',
        position: 'Permanent',
        skill: '',
      },
      {
        title: '.NET Core Developer',
        experience: '3-4 years',
        location: 'Remote',
        position: 'Permanent',
        skill: '',
      },
    ];
  }

  async sendEmail(data: Event) {
    this.loading = true;
    const downloadURL = await this.uploadFile();
    // console.log(downloadURL);
    const careersForm = data.target as HTMLFormElement;
    emailjs
      .sendForm(
        environment.emailjsConfig.serviceID,
        environment.emailjsConfig.careersTemplateID,
        careersForm,
        {
          publicKey: environment.emailjsConfig.publicKey,
        }
      )
      .then(
        (res) => {
          this.careerFrom.reset();
          this.loading = false;
          this.toastService.showSuccessToast('Job Application Submitted');
        },
        (error: any) => {
          console.log(error, 'er');
          this.loading = false;
          this.toastService.showErrorToast('Job Application Submission Failed');
        }
      );
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  async uploadFile() {
    if (!this.file) {
      return '';
    }
    let downloadURL = '';
    try {
      const url = `resumes/${this.file.name}`;
      const storageRef = ref(db, url);
      var snapshot = await uploadBytes(storageRef, this.file);
      console.log('Uploaded a blob or file!', snapshot);
      downloadURL = await getDownloadURL(snapshot.ref);
      console.log('File available at', downloadURL);
      return downloadURL;
    } catch (error) {
      console.log(error);
    } finally {
      return downloadURL;
    }
  }
}
