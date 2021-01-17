import { Component, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Job} from '../job/job';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-is-ekleme',
  templateUrl: './is-ekleme.page.html',
  styleUrls: ['./is-ekleme.page.scss'],
})
export class IsEklemePage{

  is_baslik: string;
  is_notlar: string;
  is_tarih: Date = new Date();
  is_saat: Date = new Date();
  alarm: boolean = false;


  constructor(public storage: Storage,public modalCtrl: ModalController) {

  }
    dismiss()
    {
      this.modalCtrl.dismiss({
        'dismissed': true
      });
      this.IsGuncelle();
    }

  test()
  {
 //   this.storage.clear();



    const x = new Job();
    x.ekle(this.is_baslik , this.is_notlar , this.is_tarih , this.is_saat , this.alarm);
    Job.list[Job.list.length] = x;
    let str = JSON.stringify(x);
    console.log(str);
    // @ts-ignore
    this.storage.set(new Date(), str);

    this.dismiss();
  }
  IsGuncelle(){
    Job.list = new Array<Job>();
    this.storage.forEach( (value, key, index) => {
      console.log("Key"+ key +"This is the value", JSON.parse(value));
      const x = new Job();
      value = JSON.parse(value);
      x.ekle(value["baslik"] , value["not"] , value["tarih"] , value["saat"] , value["alarm"]);
      x.key = key;
      Job.list[Job.list.length] = x;

    });
  }
}
