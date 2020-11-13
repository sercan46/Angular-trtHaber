import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HaberdetayRoutingModule } from './haberdetay.routing.module';
import { HaberdetayComponent } from './haberdetay.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [HaberdetayComponent],
  imports: [
    CommonModule,
    HaberdetayRoutingModule,
    MatProgressSpinnerModule

  ]
})
export class HaberdetayModule { }
