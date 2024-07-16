import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';
import {
  FirebaseOptions,
  initializeApp,
  provideFirebaseApp,
} from '@angular/fire/app';

import { routes } from './app.routes';
import { TemplatePageTitleStrategy } from './services/title.strategy';

const firebaseOptions: FirebaseOptions = {
  apiKey: 'AIzaSyDer-3nEgkd8ywxHfAfcnT6Sd65eAmMBEY',
  authDomain: 'quantum-edge-labs.firebaseapp.com',
  projectId: 'quantum-edge-labs',
  storageBucket: 'quantum-edge-labs.appspot.com',
  messagingSenderId: '1082574169432',
  appId: '1:1082574169432:web:a73d3226ba2fc988fdf12d',
  measurementId: 'G-EFHE08ERRQ',
};
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
      BrowserAnimationsModule
    ),
    provideFirebaseApp(() => initializeApp(firebaseOptions)),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
