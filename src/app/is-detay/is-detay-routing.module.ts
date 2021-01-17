import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsDetayPage } from './is-detay.page';

const routes: Routes = [
  {
    path: '',
    component: IsDetayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsDetayPageRoutingModule {}
