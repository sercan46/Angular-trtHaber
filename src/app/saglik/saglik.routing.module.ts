import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaglikComponent } from './saglik.component';

const routes: Routes = [{path:'',component:SaglikComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaglikRoutingModule { }
