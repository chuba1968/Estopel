import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeAreasPage } from './practice-areas.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeAreasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeAreasPageRoutingModule {}
