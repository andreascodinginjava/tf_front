import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  _url = "/api/Cliente";

  constructor(private http: HttpClient) {
    console.log("Servicio cliente");
  }

  getClientes() {
    let header = new HttpHeaders()
      .set('Type-content', 'application/json');

    return this.http.get(this._url, {
      headers: header
    })
  }
}
