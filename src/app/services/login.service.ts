import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LogInModel } from '../Models/LogInModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
  usuario: LogInModel | null = null;
  user = new BehaviorSubject(this.usuario);
  login = new BehaviorSubject("logout");

  constructor() { }

  ngOnInit(): void {
    this.login.next("logout");
    this.user.next(null);
  }
}
