import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibroComponent } from './libro.component';


const routes: Routes = [{path:'libro',component:LibroComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
