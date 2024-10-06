import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '01', pathMatch: 'full' },
    {
      path: '01',
      loadComponent: () => import('./signal-store/signal-store.component')
      .then(component => component.SignalStoreComponent),
    },
    // {
    //   path: '02',
    //   loadComponent: () => import('./signal-store-feature/signal-store-feature.component'),
    // },
    // {
    //   path: '03',
    //   loadComponent: () => import('./rxjs-integration/rxjs-integration.component'),
    // },
    // {
    //   path: '04',
    //   loadComponent: () => import('./entities/entities.component'),
    // },
];
