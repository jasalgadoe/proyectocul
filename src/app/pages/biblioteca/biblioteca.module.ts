import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { AreasComponent } from './areas/areas.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { LibroComponent } from './libro/libro.component';
import { LibroTableComponent } from './libro/libro-table/libro-table.component';
import { LibroFormComponent } from './libro/libro-form/libro-form.component';
import { AutorFormComponent } from './autores/autor-form/autor-form.component';
import { AutorTableComponent } from './autores/autor-table/autor-table.component';
import { ExistenciaFormComponent } from './existencia/existencia-form/existencia-form.component';
import { ExistenciaTableComponent } from './existencia/existencia-table/existencia-table.component';
import { AreasTableComponent } from './areas/areas-table/areas-table.component';
import { AreasFormComponent } from './areas/areas-form/areas-form.component';
import { EditorialTableComponent } from './editorial/editorial-table/editorial-table.component';
import { EditorialFormComponent } from './editorial/editorial-form/editorial-form.component';
import { TipoTableComponent } from './tipo/tipo-table/tipo-table.component';
import { TipoFormComponent } from './tipo/tipo-form/tipo-form.component';



@NgModule({
  declarations: [AreasComponent, AutoresComponent, TipoComponent, 
    EditorialComponent, ExistenciaComponent, LibroComponent, LibroTableComponent, LibroFormComponent, AutorFormComponent, AutorTableComponent, ExistenciaFormComponent, ExistenciaTableComponent, AreasTableComponent, AreasFormComponent, EditorialTableComponent, EditorialFormComponent, TipoTableComponent, TipoFormComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
