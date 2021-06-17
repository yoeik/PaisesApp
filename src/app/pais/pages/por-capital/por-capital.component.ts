import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino : string = '';
  HayError: boolean= false ;   
  paises: Country[]= [];

  constructor(private paisService :PaisService) {}

  ngOnInit(): void {
  }
  buscar(termino: string){
      this.HayError = false;
      this.termino = termino;    
        

      this.paisService.buscarCapital(this.termino)
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
            // TODO: crear sugerencias
    }  
}



 

 
