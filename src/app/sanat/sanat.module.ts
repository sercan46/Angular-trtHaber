import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SanatComponent } from './sanat.component';
import { SanatRoutingModule } from './sanat.routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [SanatComponent],
  imports: [
    CommonModule,
    SanatRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule

  ]


})
export class SanatModule { }
