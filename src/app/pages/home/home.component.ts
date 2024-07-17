import { Component, OnInit, inject } from '@angular/core';
// import {
//   Storage,
//   getDownloadURL,
//   ref,
//   uploadBytesResumable,
// } from '@angular/fire/storage';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase/firebase.init';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private metaService = inject(MetaService);
  // private storage = inject(Storage);

  file?: File;

  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: '',
      description: `Quantum Edge Labs is more than an IT solutions provider, we're the innovation architects shaping tech around your unique needs. We don't host our own party, we invite you to be the centrepiece. It's your business, your vision — and our solutions start and end with you.`,
    });
  }

  async uploadFile(input: HTMLInputElement) {
    if (!input.files) {
      return;
    }
    const file = input.files[0];
    const storageRef = ref(storage, file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);

      // Getting the download URL
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    });
  }
}
