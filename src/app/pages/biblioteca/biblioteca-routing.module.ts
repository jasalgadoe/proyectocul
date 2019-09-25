import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { AutoresComponent } from './autores/autores.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { TipoComponent } from './tipo/tipo.component';
import { LibroComponent } from './libro/libro.component';
import { EditorialComponent } from './editorial/editorial.component';


const routes: Routes = [
  {path:'areas',component:AreasComponent},
  {path:'autores',component:AutoresComponent},
  {path:'existencia',component:ExistenciaComponent},
  {path:'tipo',component:TipoComponent},
  {path:'libro',component:LibroComponent},
  {path:'editorial',component:EditorialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
