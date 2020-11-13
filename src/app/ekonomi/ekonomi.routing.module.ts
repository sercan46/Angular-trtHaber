import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EkonomiComponent } from './ekonomi.component';

const routes: Routes = [{path:'',component:EkonomiComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EkonomiRoutingModule { }
