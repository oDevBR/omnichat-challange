import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './components/material.module';
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
    MaterialModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
