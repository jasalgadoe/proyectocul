import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoRoutingModule } from './tipo-routing.module';
import { TipoComponent } from './tipo.component';
import { TipoFormComponent } from './tipo-form/tipo-form.component';
import { TipoTableComponent } from './tipo-table/tipo-table.component';


@NgModule({
  declarations: [TipoComponent,TipoFormComponent,TipoTableComponent],
  imports: [
    CommonModule,
    TipoRoutingModule
  ]
})
export class TipoModule { }
