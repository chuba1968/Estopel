import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientResourcesPageRoutingModule } from './client-resources-routing.module';

import { ClientResourcesPage } from './client-resources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientResourcesPageRoutingModule
  ],
  declarations: [ClientResourcesPage]
})
export class ClientResourcesPageModule {}
