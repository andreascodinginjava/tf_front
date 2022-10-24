import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _url = "https://localhost:7095/api/";

  constructor(private http: HttpClient) { }

  getAll(controller:string) {
    return this.http.get(this._url+controller);

    /*return this.http.get(this._url).subscribe((res) => {
      console.log(res);
    }); */
  }

  getById(controller:string, id:string) {
    return this.http.get(this._url+controller+'/'+id);
  }

  create(controller:string, body:any) {
    return this.http.post(this._url+controller, body);
  }

  update(controller:string, id:string, body:any) {
    return this.http.put(this._url+controller+'/'+id, body)
  }

  delete(controller:string, id:string) {
    return this.http.delete(this._url+controller+'/'+id);
  }
}
