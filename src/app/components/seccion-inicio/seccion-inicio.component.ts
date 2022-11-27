import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-seccion-inicio',
  templateUrl: './seccion-inicio.component.html',
  styleUrls: ['./seccion-inicio.component.css']
})
export class SeccionInicioComponent implements OnInit {

  servicioForm = this.fb.group({
    nombreM: [null, Validators.required],
    peso: [null, Validators.required],
    tipo: [null, Validators.required],
    origen: [null, Validators.required],
    destino: [null, Validators.required],
    fecha: [null, Validators.required]
  });

  tipoMercancia = [
    {name: 'A granel', abbreviation: 'GRA'},
    {name: 'Solido', abbreviation: 'SOL'}
  ];

  public tipoUsuario = '';
  private usuario = 0;
  public controllerCliente = 'Servicio/Clientes';
  public controllerConductor = 'Servicio/Publicados'
  public serviciosCliente = [];
  public serviciosPublicados =  [];

  constructor(private fb: FormBuilder, private service: ApiService) {
    this.tipoUsuario = JSON.parse(localStorage.getItem("Tipo") );
    this.usuario = JSON.parse(localStorage.getItem("Usuario") );
  }

  onSubmit(data:any): void {
    //alert('Thanks!');
    console.log(data);
    data.id = 7;
    console.log(data);
    
  }

  ngOnInit(): void {
    if (this.tipoUsuario == 'cl') {
      this.service.getById(this.controllerCliente, this.usuario+'').subscribe((resp:any) => {
        console.log(resp);
        this.serviciosCliente = resp;
      })
    } else {
      this.service.getAll(this.controllerConductor).subscribe((resp:any) => {
        console.log(resp);
        this.serviciosPublicados = resp;
      })
    }
  }

}
