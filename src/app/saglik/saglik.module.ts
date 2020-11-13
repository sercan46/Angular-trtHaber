import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SaglikComponent } from './saglik.component';
import { SaglikRoutingModule } from './saglik.routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
  declarations: [SaglikComponent],
  imports: [
    CommonModule,
    SaglikRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ]


})
export class SaglikModule { }
