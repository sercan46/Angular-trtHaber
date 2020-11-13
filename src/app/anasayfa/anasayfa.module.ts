import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnasayfaRoutingModule } from './anasayfa.routing.module';
import { AnasayfaComponent } from './anasayfa.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../layout/header/header.module';
import { HeaderComponent } from '../layout/header/header.component';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [AnasayfaComponent],
  imports: [
    CommonModule,
    AnasayfaRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ]


})
export class AnasayfaModule { }
