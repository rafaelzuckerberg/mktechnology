import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }


  getCEP(ev) {
    let cep = ev.replace(/-/g, "");
    return this.http.get('https://viacep.com.br/ws/' + cep + '/json');
  }
}
