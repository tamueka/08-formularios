import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent implements OnInit {
  usuario = {
    nombre: 'Samuel',
    apellido: 'Ruiz de la Rosa',
    correo: 'tamueka@hotmail.com',
  };

  constructor() {}

  ngOnInit(): void {}

  guardar(formulario: NgForm) {

    if (formulario.invalid){

      Object.values( formulario.controls ).forEach( control => {
        control.markAsTouched();
      })

      return;
    }
  }
}
