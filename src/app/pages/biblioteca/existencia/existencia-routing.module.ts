import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExistenciaComponent} from './existencia.component';



const routes: Routes = [{path:'existencia',component:ExistenciaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExistenciaRoutingModule { }
