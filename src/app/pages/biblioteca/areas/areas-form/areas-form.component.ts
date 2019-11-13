import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AreasService } from 'src/app/services/areas.service';

@Component({
  selector: 'app-areas-form',
  templateUrl: './areas-form.component.html',
  styleUrls: ['./areas-form.component.css']
})
export class AreasFormComponent implements OnInit {

  public areasFormulario: FormGroup;
  public titulo="formulario de Areas";
  public areas:any;
  /*submited = false;*/

  constructor(protected fb: FormBuilder , protected service:AreasService) { 
    this.createForm()
  }

  ngOnInit() {
    this.service.getAreas().subscribe(data=>{
      this.areas=data;
    });
  }
  saveAreas(){
    this.service.postAreas(this.areasFormulario.value).subscribe(data=>alert("listo"))
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