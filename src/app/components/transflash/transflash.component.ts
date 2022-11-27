import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transflash',
  templateUrl: './transflash.component.html',
  styleUrls: ['./transflash.component.css']
})
export class TransflashComponent {

  ventana:string = 'inicio';

  tipoform = this.fb.group({
    tipo: [null, Validators.required]
  });

  contactForm = this.fb.group({
    name: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    cel: [null, Validators.required],
    message: [null, Validators.required]
  });
  
  constructor(private fb: FormBuilder, public router:Router) {
    if (JSON.parse(localStorage.getItem("Tipo")) != null) {
      this.ventana = 'login';
    };
  }

  onSubmit(data:any): void {
    if (data.tipo == 'ci') {
      console.log('cliente');
      
      this.ventana = 'cliente';
    }

    if (data.tipo == 'co') {
      console.log('cond');
      
      this.ventana = 'conductor';
    }
  }

  goLogIn() {
    //this.router.navigateByUrl("/LogIn");
    this.ventana = 'login'
  }

  goSignUp(data:any) {
    if (data == 'ci') {
      this.ventana = 'cliente';
    }

    if (data == 'co') {
      this.ventana = 'conductor';
    }
  }
}
