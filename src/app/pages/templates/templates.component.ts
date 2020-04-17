import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

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
    pais: 'PRI',
    genero: 'M'
  };

  paises: any[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {

    this.paisService.getPaises()
    .subscribe( paises => {
      this.paises = paises;

      this.paises.unshift({
        nombre: '[ Seleccione pais ]',
        codigo: ''
      })
    })
  }

  guardar(formulario: NgForm) {
    console.log(formulario)

    if (formulario.invalid){

      Object.values( formulario.controls ).forEach( control => {
        control.markAsTouched();
      })

      return;
    }
    console.log(formulario.value);
  }
}
