import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibroRoutingModule } from './libro-routing.module';
import { LibroComponent } from './libro.component';
import { LibroTableComponent } from './libro-table/libro-table.component';
import { LibroFormComponent } from './libro-form/libro-form.component';


@NgModule({
  declarations: [LibroComponent,LibroTableComponent,LibroFormComponent],
  imports: [
    CommonModule,
    LibroRoutingModule
  ]
})
export class LibroModule { }
