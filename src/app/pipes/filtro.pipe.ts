import { Pipe, PipeTransform } from '@angular/core';
import { Farmaco  } from '../models/farmaco.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(farmacos: Farmaco[], texto: string): Farmaco[] {
    
    if( texto.length === 0 ) {return farmacos;}

    texto= texto.toLocaleLowerCase();

      return farmacos.filter( farmaco => {
      return farmaco.name.toLocaleLowerCase().includes(texto)
      || farmaco.email.toLocaleLowerCase().includes(texto);
    }); 

  }

}
