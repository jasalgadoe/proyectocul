import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.css']
})
export class AutorFormComponent implements OnInit {
  public autorFormulario: FormGroup;
  public titulo="Autores";
  constructor(protected fb:FormBuilder) { }
  ngOnInit() {
  }
  createForm(){
    this.autorFormulario = this.fb.group({
      code:['',Validators.required],
      name:['',Validators.required],
      lastname:['',Validators.required],
      bd_year :['',Validators.required],
      death_year :['',Validators.required],
      bd_place :['',Validators.required]
    })
  }

}
