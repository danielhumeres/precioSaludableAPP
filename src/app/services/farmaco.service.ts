import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Farmaco } from '../models/farmaco.model';
import { delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmacoService {

  constructor( private http: HttpClient) { }

  getFarmacos(){

    return this.http.get<Farmaco[]>( 'https://jsonplaceholder.typicode.com/users')
              .pipe(
                delay(1500)
                );
    //esto muestra la info en consola 
    /* .subscribe(resp => {

        console.log(resp)
      });
 */  }
}
