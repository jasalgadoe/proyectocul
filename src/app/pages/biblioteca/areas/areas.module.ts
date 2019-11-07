import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './areas.component';
import { AreasTableComponent } from './areas-table/areas-table.component';
import { AreasFormComponent } from './areas-form/areas-form.component';


@NgModule({
  declarations: [AreasComponent,AreasTableComponent,AreasFormComponent],
  imports: [
    CommonModule,
    AreasRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class AreasModule { }
