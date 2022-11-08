import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tf_front';
  login:string = "";

  constructor(public loginService:LoginService){}

  ngOnInit(): void {
    console.log("usuario => ", this.loginService.usuario);
    
    console.log("user => ",this.loginService.user.value);
    
    if (this.loginService.user.value != null) {
      this.loginService.login.next("login");
    } else {
      this.loginService.login.next("logout");
    }

    this.loginService.login.subscribe(value => {
      this.login = value;
      console.log(this.login);
    }) 
  }
}
