import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnasayfaPage } from './anasayfa.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AnasayfaPageRoutingModule } from './anasayfa-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnasayfaPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [AnasayfaPage]
})
export class AnasayfaPageModule {}
