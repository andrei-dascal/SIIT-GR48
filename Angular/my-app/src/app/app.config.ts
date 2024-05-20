import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FirstComponent } from './components/first-component/first-component.component';
import { SecondComponent } from './components/second-component/second-component.component';

const routes: Routes = [
  // { path: '', component: SecondComponent },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]
};
