import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { EgitimRoutingModule } from './egitim.routing.module';
import { EgitimComponent } from './egitim.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [EgitimComponent],
  imports: [
    CommonModule,
    EgitimRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule

  ]


})
export class EgitimModule { }
