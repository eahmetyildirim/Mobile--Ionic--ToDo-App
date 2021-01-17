import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'anasayfa',
        loadChildren: () => import('../anasayfa/anasayfa.module').then(m => m.AnasayfaPageModule)
      },
      {
        path: 'ayarlar',
        loadChildren: () => import('../ayarlar/ayarlar.module').then(m => m.AyarlarPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/anasayfa',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/anasayfa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
