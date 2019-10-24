import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores.component';
import { AutorFormComponent } from './autor-form/autor-form.component';
import { AutorTableComponent } from './autor-table/autor-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AutoresComponent,AutorTableComponent,AutorFormComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class AutoresModule { }
