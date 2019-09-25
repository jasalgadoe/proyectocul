import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { AreasComponent } from './areas/areas.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { LibroComponent } from './libro/libro.component';


@NgModule({
  declarations: [AreasComponent, AutoresComponent, TipoComponent, EditorialComponent, ExistenciaComponent, LibroComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
