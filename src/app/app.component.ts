import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;
  nombre:string = "";
  apellido:string = "";
  entradas: any[];

  registrarUsuario(){    
    this.registrado = true;
    this.mensaje="Usuario registrado con éxito";   
  }
  constructor(){
    this.entradas=[
      {titulo:"Python cada día más presente"},
      {titulo:"Java presnete desde hace 20 años"},
      {titulo:"Javascript refuerza"},
      {titulo:"Kotlin potencia tus apps"},
      {titulo:"Donde esta pascal?"}

    ];

  }
  
}
