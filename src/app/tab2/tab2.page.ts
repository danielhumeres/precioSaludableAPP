import { Component } from '@angular/core';
import { FarmacoService } from '../services/farmaco.service';
import { Farmaco } from '../models/farmaco.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  farmacos: Farmaco[] = [];
  textoBuscar = '';

  constructor( private farmacoService: FarmacoService)  {

    //método para obtener la info del servicio farmaco.services
    this.farmacoService.getFarmacos()
    .subscribe(resp => this.farmacos = resp );
  }

  buscarFarmaco( event ) {

    const texto = event.target.value;
    this.textoBuscar=texto;
  }
}
