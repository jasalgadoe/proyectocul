import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-areas-form',
  templateUrl: './areas-form.component.html',
  styleUrls: ['./areas-form.component.css']
})
export class AreasFormComponent implements OnInit {

  public areasFormulario: FormGroup;
  public titulo="formulario de Areas";
  /*submited = false;*/

  constructor(protected fb: FormBuilder ) { }

  ngOnInit() {
  }
  createForm(){
    this.areasFormulario = this.fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required]
      }) 
    }
   /* get f() {return this.areasFormulario.controls; }*/

    
/*onSubmit() {
  this.submited = true;

  if (this.areasFormulario.invalid) {
      return;
  }

  alert('Mensaje Enviado !')
}*/
  }