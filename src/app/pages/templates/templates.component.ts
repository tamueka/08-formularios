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
    apellido: 'Ruiz De la Rosa',
    correo: 'tamueka@hotmail.com',
  };

  constructor() {}

  ngOnInit(): void {}

  guardar(formulario: NgForm) {
    console.log(formulario);
    console.log(formulario.value);
  }
}
