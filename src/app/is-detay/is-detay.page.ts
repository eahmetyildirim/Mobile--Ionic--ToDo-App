import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {NavParams} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {Job} from '../job/job';

@Component({
  selector: 'app-is-detay',
  templateUrl: './is-detay.page.html',
  styleUrls: ['./is-detay.page.scss'],
})
export class IsDetayPage{
  duzenleB: boolean;
  baslik: string;
  notlar: string;
  tarih: Date = new Date();
  saat: Date = new Date();
  alarm: boolean = false;
  @Input() key: string;
  constructor(public modalCnt: ModalController , navParams: NavParams , public storage: Storage) {
    this.duzenleB = false;
    this.key = navParams.get('key');
    console.log(" Key : "+this.key);
    this.storage.get(this.key).then(value => {
      value = JSON.parse(value);
      this.baslik = value["baslik"];
      this.notlar = value["notlar"];
      this.tarih  = value["tarih"];
      this.saat   = value["saat"];
      this.alarm  = value["alarm"];
    });



  }
  dismiss()
  {
    this.modalCnt.dismiss({
      'dismissed': true
    });
    this.IsGuncelle();
  }
  sil(){
    this.storage.remove(this.key).then(value => {
      console.log("Silindi");
      this.dismiss();
    });
  }
  duzenle(){
    this.duzenleB = true;
  }
  kaydet(){
    const x = new Job();
    x.ekle(this.baslik , this.notlar , this.tarih , this.saat , this.alarm);
    let str = JSON.stringify(x);
    // @ts-ignore
    this.storage.set(new Date(this.key), str);
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
