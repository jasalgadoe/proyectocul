import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(protected http:HttpClient) { }
getAreas(){
  return this.http.get('http://trainning.omarenco.com/api/area');
}
postAreas(data){
  return this.http.get('http://trainning.omarenco.com/api/area',data)
}
}
