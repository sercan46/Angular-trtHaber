import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SporComponent } from './spor.component';
import { SporRoutingModule } from './spor.routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [SporComponent],
  imports: [
    CommonModule,
    SporRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule

  ]
})
export class SporModule { }
