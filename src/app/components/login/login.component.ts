import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    dni: [null, Validators.required],
    clave: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.nullValidator
    ])],
    tipo: [null, Validators.required]
  });

  tiposClientes = [
    { name: 'Conductor', abbreviation: 'CO' },
    { name: 'Cliente', abbreviation: 'CL' }
  ]

  login: string = "";
  session = ''

  constructor(public loginService: LoginService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log("usuario => ", this.loginService.usuario);

    console.log("user => ", this.loginService.user.value);

    this.session = sessionStorage.getItem('Session');

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

  onSubmit(): void {
    alert('Thanks!');
  }
}
