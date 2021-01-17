import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsDetayPageRoutingModule } from './is-detay-routing.module';

import { IsDetayPage } from './is-detay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsDetayPageRoutingModule
  ],
  declarations: [IsDetayPage]
})
export class IsDetayPageModule {}
