import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrerra( control: FormControl): {[s:string]: boolean } {

    if(control.value?.toLowerCase() === 'herrera'){
          return {
            noHerrera: true,
          }
    }

    return null;
  }
}
