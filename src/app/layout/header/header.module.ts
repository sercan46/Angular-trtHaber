import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule

  ],
  exports:[
    HeaderModule,

  ]
})
export class HeaderModule { }
