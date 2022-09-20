import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-conductor',
  templateUrl: './signup-conductor.component.html',
  styleUrls: ['./signup-conductor.component.css']
})
export class SignupConductorComponent {

  conductorForm = this.fb.group({
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
    genero: [null, Validators.required],
    capacidad: [null, Validators.required],
    modelo: [null, Validators.required],
    color: [null, Validators.required],
    tipoVehiculo: [null, Validators.required],
    nTarjeta: [null, Validators.required],
    fechaVencimiento: [null, Validators.required],
    codigoSeguridad: [null, Validators.required]
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

  colores = [
    {name: 'Blanco', abbreviation: 'B'}
  ];

  tipoVehiculos = [
    {name: 'Estacas', abbreviation: 'ES'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }

}
