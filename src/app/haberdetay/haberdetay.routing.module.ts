import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HaberdetayComponent } from './haberdetay.component';

const routes: Routes = [{path:'',component:HaberdetayComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HaberdetayRoutingModule { }
