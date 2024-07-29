import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import {
//   provideFirebaseApp,
//   initializeApp,
//   FirebaseOptions,
// } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from './app.routes';
import { routerFeature } from './config/router.feature';
import { TemplatePageTitleStrategy } from './services/title.strategy';
// import { environment } from '../environments/environment';

// const options = environment.firebaseConfig as FirebaseOptions;
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, routerFeature),
    provideAnimations(),
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
    // provideFirebaseApp(() => initializeApp(options)),
    // provideFirestore(() => getFirestore()),
  ],
};
