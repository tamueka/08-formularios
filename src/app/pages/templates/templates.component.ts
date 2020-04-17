import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent implements OnInit {

  usuario = ({
    nombre: 'Sam'
  })

  constructor() {}

  ngOnInit(): void {}

  guardar(formulario: NgForm){
    console.log(formulario)
    console.log(formulario.value)
  }
}
