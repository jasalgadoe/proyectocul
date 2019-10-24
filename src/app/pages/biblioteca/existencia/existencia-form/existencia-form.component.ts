import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencia-form',
  templateUrl: './existencia-form.component.html',
  styleUrls: ['./existencia-form.component.css']
})
export class ExistenciaFormComponent implements OnInit {
  
  public years_place:String;
  public Nedicion:String;
  public cubierta:String;
  public paginas:String;
  public nejemplares:String;
  public estanteria:String;

  constructor() { }

  ngOnInit() {
  }

  Saveform(){
    alert(this.years_place)
  }

}
