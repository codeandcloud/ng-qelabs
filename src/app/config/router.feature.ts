import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  withInMemoryScrolling,
} from '@angular/router';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
};

export const routerFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);
