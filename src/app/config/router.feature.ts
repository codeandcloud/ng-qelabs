import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  withInMemoryScrolling,
} from '@angular/router';

const scrollConfig: InMemoryScrollingOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top',
};

export const routerFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);
