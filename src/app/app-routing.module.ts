import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'anasayfa',
    loadChildren: () => import('./anasayfa/anasayfa.module').then( m => m.AnasayfaPageModule)
  },
  {
    path: 'ayarlar',
    loadChildren: () => import('./ayarlar/ayarlar.module').then( m => m.AyarlarPageModule)
  },
  {
    path: 'is-ekleme',
    loadChildren: () => import('./is-ekleme/is-ekleme.module').then( m => m.IsEklemePageModule)
  },
  {
    path: 'is-detay',
    loadChildren: () => import('./is-detay/is-detay.module').then( m => m.IsDetayPageModule)
  },
  {
    path: 'job',
    loadChildren: () => import('./job/job').then( m => m.Job)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
