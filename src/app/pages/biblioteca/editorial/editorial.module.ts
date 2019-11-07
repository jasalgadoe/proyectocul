import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule} from '@angular/forms'
import { EditorialRoutingModule } from './editorial-routing.module';
import { EditorialComponent } from './editorial.component';
import { EditorialFormComponent } from './editorial-form/editorial-form.component';
import { EditorialTableComponent } from './editorial-table/editorial-table.component';



@NgModule({
  declarations: [EditorialComponent,EditorialFormComponent,EditorialTableComponent],
  imports: [
    CommonModule,
    EditorialRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EditorialModule { }
