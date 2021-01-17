import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsEklemePageRoutingModule } from './is-ekleme-routing.module';

import { IsEklemePage } from './is-ekleme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsEklemePageRoutingModule
  ],
  declarations: [IsEklemePage]
})
export class IsEklemePageModule {}
