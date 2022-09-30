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

  public cliente = true;
  public controller = 'Servicio';
  public serviciosCliente = [];
  public nombre = 'Cecilia Ruiz';

  constructor(private fb: FormBuilder, private service: ApiService) {}

  onSubmit(data:any): void {
    //alert('Thanks!');
    console.log(data);
    data.id = 7;
    console.log(data);
    
  }

  ngOnInit(): void {
    if (this.cliente) {
      this.service.getAll(this.controller).subscribe((resp:any) => {
        console.log(resp);
        this.serviciosCliente = resp;
      })
    } else {
      console.log('Conductor');
    }
  }

}
