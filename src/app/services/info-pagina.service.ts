import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  equipo: any[] = [];
  constructor( private http: HttpClient ) { 
    //console.log('Servicio de InfoPagina listo...');

    /*
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( ( resp: InfoPagina ) => {
      this.cargada = true;
      this.info = resp;

      // Muestra el json como un objeto javascript
      console.log(resp);

      // resp.twitter marca error porque no sabe que tiene el elemento
      // Como obtener un elemento sin que lo marque como error sin tener interface
      //console.log(resp['twitter']);

      // declarando resp de tipo infoPagina (interface) se soluciona error
      // Como obtener un elemento teniendo la variable resp declarada de tipo infoPagina
      console.log( resp.twitter );
    })
    */
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-cd47f.firebaseio.com/equipo.json')
      .subscribe( (resp: any) => {

        //this.cargada = true;
        //this.info = resp;
        //console.log(resp);
        this.equipo = resp;
      });
  }
}
