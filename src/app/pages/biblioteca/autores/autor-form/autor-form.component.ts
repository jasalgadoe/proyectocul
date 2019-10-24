import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.css']
})
export class AutorFormComponent implements OnInit {

  public titulo="Autores";
  public nombre:String;
  public apellido:String;
  public fechanac:String;
  public nacionalidad:String;

  constructor() { }

  ngOnInit() {
  }

  Savefrom(){
    alert(this.nombre)
  }

}
