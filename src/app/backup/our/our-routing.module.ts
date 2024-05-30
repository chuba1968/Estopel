import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurPage } from './our.page';

const routes: Routes = [
  {
    path: '',
    component: OurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurPageRoutingModule {}
