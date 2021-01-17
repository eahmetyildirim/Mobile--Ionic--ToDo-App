import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {IsEklemePage} from '../is-ekleme/is-ekleme.page';
import { IonRouterOutlet } from '@ionic/angular';
import {Job} from '../job/job';
import {IsDetayPage} from '../is-detay/is-detay.page';

import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.page.html',
  styleUrls: ['./anasayfa.page.scss'],
})
export class AnasayfaPage{

  list: Array<Job> = Job.list;
  duzenle: boolean;
  searchText: string;
  constructor(public modalController: ModalController,private routerOutlet: IonRouterOutlet , public storage: Storage) {
    this.IsGuncelle();
  }
  async IsEkle() {
    const modal = await this.modalController.create({
      component: IsEklemePage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }
  async IsDetay(key) {
    console.log(key);
    const modal = await this.modalController.create({
      component: IsDetayPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        'key': key ,
      }
    });
    return await modal.present();
  }
  IsGuncelle(){
  //  Job.list = new Array<Job>();
    this.storage.forEach( (value, key, index) => {
      console.log("Key"+ key +"This is the value", JSON.parse(value));
      const x = new Job();
      value = JSON.parse(value);
      x.ekle(value["baslik"] , value["not"] , value["tarih"] , value["saat"] , value["alarm"]);
      x.key = key;
      console.log(key);
      Job.list[Job.list.length] = x;

    });
  }

  search(){
    if(this.searchText==undefined){
      console.log("Yazılan birşey yok");
    }else{
      if(this.searchText == ""){
        Job.list = new Array<Job>();
        this.IsGuncelle();
      }else{

        Job.list = new Array<Job>();
        this.storage.forEach( (value, key, index) => {
          const x = new Job();
          value = JSON.parse(value);

          x.ekle(value["baslik"] , value["not"] , value["tarih"] , value["saat"] , value["alarm"]);
          x.key = key;

          if(x.getBaslik().search(this.searchText)){
          Job.list[Job.list.length] = x;
          console.log("Eklendi"+ x);
          }

        });



        }
    }

  }

}
