import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExistenciaRoutingModule } from './existencia-routing.module';
import { ExistenciaComponent } from './existencia.component';
import { ExistenciaFormComponent } from './existencia-form/existencia-form.component';
import { ExistenciaTableComponent } from './existencia-table/existencia-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ExistenciaComponent,ExistenciaFormComponent,ExistenciaTableComponent],
  imports: [
    CommonModule,
    ExistenciaRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class ExistenciaModule { }
