import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { LogInModel } from 'src/app/Models/LogInModel';
import { PerfilModel } from 'src/app/Models/PerfilModel';
import { ApiService } from 'src/app/services/api.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponentt {

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

  login: LogInModel = {
    idConductor: 0,
    claveConductor: '',
    estadoConductor: ''
  }

  us: PerfilModel;

  constructor(private fb: FormBuilder, public service: ApiService, public router: Router, public loginService: LoginService) { }

  onSubmit(data: any): void {

    if ((data.tipo == "CL" || data.tipo == "CO") && data.dni == '1983' && data.clave == 'admin') {
      let user: LogInModel = {
        idConductor: 1983,
        claveConductor: 'admin',
        estadoConductor: 'activo',
      }

      this.router.navigateByUrl("/Dashboard");
      this.loginService.user.next(user);
      this.loginService.login.next("login");
      sessionStorage.setItem('Session', data.dni + "ad");
      localStorage.setItem("Usuario", JSON.stringify(user.idConductor));
      localStorage.setItem("Tipo", JSON.stringify("ad"));
    } else {
      if (data.tipo == "CO") {
        this.service.logIn("Conductor/LogIn", data.dni, data.clave).subscribe((resp: any) => {
          console.log(resp[0]);

          if (resp[0] == undefined) {
            alert("Usuario no encontrado");
          } else if (resp[0].estadoConductor == "INACTIVO") {
            alert("Usuario inactivo, contactese con el administrador")
          } else {
            this.router.navigateByUrl("/Inicio");
            this.loginService.user.next(resp[0]);
            this.loginService.login.next("login");
            sessionStorage.setItem('Session', data.dni + "co");
            localStorage.setItem("Usuario", JSON.stringify(data.dni));
            localStorage.setItem("Tipo", JSON.stringify("co"));
          }
        })
      }

      if (data.tipo == "CL") {
        this.service.logIn("Cliente/LogIn", data.dni, data.clave).subscribe((resp: any) => {
          console.log(resp[0]);

          if (resp[0] == undefined) {
            alert("Usuario no encontrado");
          } else if (resp[0].estadoCliente == "INACTIVO") {
            alert("Usuario inactivo, contactese con el administrador")
          } else {
            this.router.navigateByUrl("/Inicio");
            this.loginService.user.next(resp[0]);
            this.loginService.login.next("login");
            sessionStorage.setItem('Session', data.dni + "cl");
            localStorage.setItem("Usuario", JSON.stringify(data.dni));
            localStorage.setItem("Tipo", JSON.stringify("cl"));
          }
        })
      }
    }

  }

}
