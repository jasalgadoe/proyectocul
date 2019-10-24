import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {

  public titulo:String;
  public fechalaz:String;
  public autor:String;
  public area:String;
  public editorial:String;
  public idioma:String;


  constructor() { }

  ngOnInit() {
  }
  Savefrom(){
    alert(this.titulo)
  }

}
