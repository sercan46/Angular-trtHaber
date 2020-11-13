import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanatComponent } from './sanat.component';

const routes: Routes = [{path:'',component:SanatComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanatRoutingModule { }
