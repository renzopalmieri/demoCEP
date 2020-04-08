import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor( private http: HttpClient) {

    console.log('service ready');

  }

  getQuery(query: string) {
    const url = `http://viacep.com.br/ws/${query}/json/`;
    return this.http.get(url);
}


  getCep(cep: string){
    return this.getQuery(cep);
  }







}
