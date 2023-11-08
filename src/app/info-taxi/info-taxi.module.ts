import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoTaxiPageRoutingModule } from './info-taxi-routing.module';

import { InfoTaxiPage } from './info-taxi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoTaxiPageRoutingModule
  ],
  declarations: [InfoTaxiPage]
})
export class InfoTaxiPageModule {}
