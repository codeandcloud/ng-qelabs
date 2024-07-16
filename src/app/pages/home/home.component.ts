import { Component, OnInit, inject } from '@angular/core';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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

  file?: File;

  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: '',
      description: `Quantum Edge Labs is more than an IT solutions provider, we're the innovation architects shaping tech around your unique needs. We don't host our own party, we invite you to be the centrepiece. It's your business, your vision — and our solutions start and end with you.`,
    });
  }

  onChange(event: any) {
    this.file = event?.target?.files[0] ?? undefined;
  }

  async uploadFile() {
    const storageRef = ref(storage, 'some-child');
    if (!this.file) {
      return;
    }
    uploadBytes(storageRef, this.file).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);

      // Getting the download URL
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    });
  }
}
