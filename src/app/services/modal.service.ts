import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  cliente: any;
  conductor: any;
  accion = new BehaviorSubject("");

  constructor() { }
}
