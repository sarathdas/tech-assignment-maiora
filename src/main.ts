import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'tables',
    loadComponent: () =>
      import('./app/tables/tables.component').then((m) => m.TablesComponent),
  },
  {
    path: 'forms',
    loadComponent: () =>
      import('./app/forms/forms.component').then((m) => m.FormsComponent),
  },
  {
    path: 'charts',
    loadComponent: () =>
      import('./app/charts/charts.component').then((m) => m.ChartsComponent),
  },
  { path: '', redirectTo: '/tables', pathMatch: 'full' },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
}).catch((err) => console.error(err));
