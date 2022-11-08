import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  login = new BehaviorSubject(false);
  signup = new BehaviorSubject(false);
  

  constructor() { }

  ngOnInit(): void {
  }
}
