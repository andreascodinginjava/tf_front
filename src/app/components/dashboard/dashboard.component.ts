import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public cantUsuarios: any;
  public cliente: any;
  public conductor: any;
  public ventas: any;
  public servicios: any;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.cantidadUsuariosGrafica();
    this.clientesCiudad();
    this.conductorCiudad();
    this.ventasMes();
    this.serviciosMes();
    this.tipoMercanciaTransportada();
    this.serviciosCiudad();
  }

  conductorCiudad() {
    
    this.cantUsuarios = new Chart("conductorCant", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Bogota', 'Santa Marta', 'Cali', 'Medellin'],
        datasets: [
          {
            data: ['6', '2', '4', '7'],
          }
        ]
      },
    });
  }

  clientesCiudad() {
    this.cliente = new Chart("clienteCant", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Bogota', 'Santa Marta', 'Cali', 'Medellin'],
        datasets: [
          {
            data: ['6', '2', '4', '7'],
          }
        ]
      },
    });
  }

  cantidadUsuariosGrafica() {
    let cantUsuariosCli:number = 0;
    let cantUsuariosCon:number = 0;

    this.service.getAll('Conductor').subscribe((resp:any) => {
      cantUsuariosCon = resp.length;
    })

    this.service.getAll('Cliente').subscribe((resp:any) => {
      cantUsuariosCli = resp.length;
      console.log(resp.length);
      
    })

    console.log(cantUsuariosCon);
    

    this.conductor = new Chart("cantUsers", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Conductores', 'Clientes'],
        datasets: [
          {
            data: ['107', '150'],
          }
        ]
      },
    });
  }

  findCantCli() {

  }

  ventasMes() {
    this.ventas = new Chart("ventas", {
      type: 'bar',
      data: {
        labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        datasets: [
          {
            label: 'Pesos (COP) vendidos',
            data: [12, 14, 1, 7, 8, 1],
            borderWidth: 1,
            backgroundColor: 'rgba(147, 223, 255, 0.596)',
            hoverBackgroundColor: 'rgb(147, 222, 255)',
            borderColor: 'rgb(147, 222, 255)',
            hoverBorderColor: 'rgb(126, 212, 248)',
          }
          ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  serviciosMes() {
    this.servicios = new Chart("servicios", {
      type: 'bar',
      data: {
        labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
        datasets: [
          {
            label: 'Pesos (COP) vendidos',
            data: [12, 14, 1, 7, 8, 1],
            borderWidth: 1,
            backgroundColor: 'rgba(211, 211, 211, 0.37)',
            hoverBackgroundColor: 'rgb(211, 211, 211)',
            borderColor: 'rgb(211, 211, 211)',
            hoverBorderColor: 'rgb(211, 211, 211)',
          }
          ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  tipoMercanciaTransportada() {
    this.conductor = new Chart("tipoMerc", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Granel', 'Liquido', 'Fragil', 'Peligroso', 'Materia prima'],
        datasets: [
          {
            data: ['70', '40', '100', '80', '10'],
          }
        ]
      },
    });
  }

  serviciosCiudad() {
    this.conductor = new Chart("serviciosCiu", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Bogota', 'Santa Marta', 'Cali', 'Medellin'],
        datasets: [
          {
            data: ['70', '40', '100', '80'],
          }
        ]
      },
    });
  }

  /*createChart() {
    this.grafico = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['Conductores', 'Clientes'],
        datasets: [{
          label: '# de usuarios',
          data: [12, 15],
          borderWidth: 1,
          backgroundColor: 'blue'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.grafico = new Chart("MyChart", {
      type: 'polarArea', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Conductores', 'Clientes'],
        datasets: [
          {
            data: ['70', '40'],
          }
        ]
      },

    });

  }*/

  /*createChart2() {
    this.grafico2 = new Chart("MyChart2", {
      type: 'bar',
      data: {
        labels: ['Numero de usuarios registrados en Bogota'],
        datasets: [
          {
            label: 'Clientes',
            data: [12],
            borderWidth: 1,
            backgroundColor: 'rgba(211, 211, 211, 0.37)',
            hoverBackgroundColor: 'rgb(211, 211, 211)',
            borderColor: 'rgb(211, 211, 211)',
            hoverBorderColor: 'rgb(211, 211, 211)',
          },
          {
            label: 'Conductores',
            data: [12],
            borderWidth: 1,
            backgroundColor: 'rgba(147, 223, 255, 0.596)',
            hoverBackgroundColor: 'rgb(147, 222, 255)'
          }
          ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }*/
}
