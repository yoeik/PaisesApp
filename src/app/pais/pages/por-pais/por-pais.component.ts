import { Component, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/Pais.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent  {

  termino : string = '';
  HayError: boolean= false ;   
  paises: Country[]= [];

  paisesSugeridos: Country[]= [];
  mostrarSugerencia : boolean = false;
  

  constructor(private paisService :PaisService) {}


  buscar(termino: string){
    this.HayError = false;
    this.termino = termino;    
  

    this.paisService.buscarPais(this.termino)
      .subscribe ( paises => {
        console.log(paises);
        this.paises= paises;      
    }, 
      (err) => {
        this.HayError= true;
        console.log('Hubo un error');
        this.paises = [];      
      });
   
      
  }
  sugerencias(termino:string ) {
          this.HayError= false;
          this.termino = termino;
          this.mostrarSugerencia= true;

          this.paisService.buscarPais(termino)
            .subscribe( paises => this.paisesSugeridos = paises.splice(0,5),
            (err) => this.paisesSugeridos = []);
             
             
  }  
  buscarSugerido(termino: string){
      this.buscar(termino); 
  }
}
