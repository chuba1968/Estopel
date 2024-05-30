import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientResourcesPage } from './client-resources.page';

const routes: Routes = [
  {
    path: '',
    component: ClientResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientResourcesPageRoutingModule {}
