import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './components/material.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class CoreModule { }
