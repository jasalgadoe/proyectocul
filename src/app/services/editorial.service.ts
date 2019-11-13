import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  constructor(protected http:HttpClient) { }

  getEditorial(){
    return this.http.get('http://trainning.omarenco.com/api/editorial');
  }
  postEditorial(data){
    return this.http.post('http://trainning.omarenco.com/api/editorial',data)
  }
}
