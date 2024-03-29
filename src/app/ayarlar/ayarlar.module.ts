import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyarlarPageRoutingModule } from './ayarlar-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AyarlarPage } from './ayarlar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyarlarPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [AyarlarPage]
})
export class AyarlarPageModule {}
