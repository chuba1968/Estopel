import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeAreasPageRoutingModule } from './practice-areas-routing.module';

import { PracticeAreasPage } from './practice-areas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeAreasPageRoutingModule
  ],
  declarations: [PracticeAreasPage]
})
export class PracticeAreasPageModule {}
