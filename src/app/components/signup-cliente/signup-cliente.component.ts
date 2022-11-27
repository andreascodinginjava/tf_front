import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-cliente',
  templateUrl: './signup-cliente.component.html',
  styleUrls: ['./signup-cliente.component.css']
})
export class SignupClienteComponent {

  salir:string = '';

  clienteForm = this.fb.group({
    dni: [null, Validators.required],
    name: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    clave: [null, Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.nullValidator
    ])],
    clave2: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(15)
    ])],
    ciudad: [null, Validators.required],
    genero: [null, Validators.required]
  });

  hasUnitNumber = false;

  ciudades = [
    {name: 'Bogota', abbreviation: 'BOG'}
  ];

  generos = [
    {name: 'Femenino', abbreviation: 'F'},
    {name: 'Masculino', abbreviation: 'M'},
    {name: 'Otro', abbreviation: 'O'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }

  goSalir() {
    this.salir = 'inicio';
  }
}
