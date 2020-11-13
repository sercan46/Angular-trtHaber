import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnasayfaComponent } from './anasayfa.component';

const routes: Routes = [{path:'',component:AnasayfaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnasayfaRoutingModule { }
