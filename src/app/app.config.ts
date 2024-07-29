import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, TitleStrategy } from '@angular/router';
import { routes } from './app.routes';
import { routerFeature } from './features/router.feature';
import { TemplatePageTitleStrategy } from './services/title.strategy';

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
  ],
};
