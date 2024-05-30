import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurPageRoutingModule } from './our-routing.module';

import { OurPage } from './our.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    IonicModule,
    OurPageRoutingModule
  ],
  declarations: [OurPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OurPageModule {}
