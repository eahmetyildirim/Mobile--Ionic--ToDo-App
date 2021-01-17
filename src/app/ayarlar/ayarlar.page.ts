import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayarlar',
  templateUrl: './ayarlar.page.html',
  styleUrls: ['./ayarlar.page.scss'],
})
export class AyarlarPage implements OnInit {
  sessiz: boolean;
  titresim: boolean;
  constructor() { }

  ngOnInit() {
  }

}
