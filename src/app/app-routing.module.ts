import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'client-resources',
    loadChildren: () => import('./client-resources/client-resources.module').then( m => m.ClientResourcesPageModule)
  },
  {
    path: 'practice-areas',
    loadChildren: () => import('./practice-areas/practice-areas.module').then( m => m.PracticeAreasPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FAQsPageModule)
  },
  {
    path: 'our',
    loadChildren: () => import('./our/our.module').then( m => m.OurPageModule)
  },
  {
    path: 'top',
    loadChildren: () => import('./top/top.module').then( m => m.TopPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
