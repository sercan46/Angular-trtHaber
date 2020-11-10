import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/anasayfa', pathMatch: 'full'},
  {path:'anasayfa', loadChildren: () => import('./anasayfa/anasayfa.module').then(m => m.AnasayfaModule)},
  {path:'spor', loadChildren: () => import('./spor/spor.module').then(m => m.SporModule)},
  {path:'ekonomi', loadChildren: () => import('./ekonomi/ekonomi.module').then(m => m.EkonomiModule)},
  {path:'saglik', loadChildren: () => import('./saglik/saglik.module').then(m => m.SaglikModule)},
  {path:'egitim', loadChildren: () => import('./egitim/egitim.module').then(m => m.EgitimModule)},
  {path:'kultur-sanat', loadChildren: () => import('./sanat/sanat.module').then(m => m.SanatModule)},
  {path:'haber-detay/:id',loadChildren: () => import('./haberdetay/haberdetay.module').then(m => m.HaberdetayModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
