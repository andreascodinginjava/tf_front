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
  session=''

  constructor(public loginService:LoginService){}

  ngOnInit(): void {
    this.session=sessionStorage.getItem('Session');

    if (this.session != null) {
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
