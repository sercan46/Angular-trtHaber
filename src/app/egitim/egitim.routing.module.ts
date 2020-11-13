import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EgitimComponent } from './egitim.component';

const routes: Routes = [{path:'',component:EgitimComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EgitimRoutingModule { }
