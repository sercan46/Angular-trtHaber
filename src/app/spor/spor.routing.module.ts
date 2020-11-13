import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SporComponent } from './spor.component';

const routes: Routes = [{path:'',component:SporComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SporRoutingModule { }
