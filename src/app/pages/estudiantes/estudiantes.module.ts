import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { StudientTableComponent } from './studient-table/studient-table.component';
import { StudientFormComponent } from './studient-form/studient-form.component';
import { EstudiantesComponent } from './estudiantes.component';


@NgModule({
  declarations: [EstudiantesComponent,StudientTableComponent, StudientFormComponent],
  imports: [
    CommonModule,
    EstudiantesRoutingModule
  ]
})
export class EstudiantesModule { }
