import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsEklemePage } from './is-ekleme.page';

const routes: Routes = [
  {
    path: '',
    component: IsEklemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsEklemePageRoutingModule {}
