import { Routes } from '@angular/router';
import { BundleSizeExampleComponent } from './bundle-size-example/bundle-size-example.component';
import { HttpRequestExampleComponent } from './http-request-example/http-request-example.component';

export const routes: Routes = [
  {
    path: 'bundle-size-example',
    component: BundleSizeExampleComponent,
  },
  {
    path: 'http-request-example',
    component: HttpRequestExampleComponent,
  },
];
