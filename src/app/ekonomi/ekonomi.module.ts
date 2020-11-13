import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EkonomiComponent } from './ekonomi.component';
import { EkonomiRoutingModule } from './ekonomi.routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [EkonomiComponent],
  imports: [
    CommonModule,
    EkonomiRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ]


})
export class EkonomiModule { }
